import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import HearderBar from '../components/HearderBar';
import useLoadFonts from '../hooks/useLoadFonts';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
// import { FlatList } from 'react-native-gesture-handler';
import CoffeeCard from '../components/CoffeeCard';



SplashScreen.preventAutoHideAsync();

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
}


const getCoffeeList = (category: string, data: any) => {
  if (category == "All") {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
}

const HomeScreen = () => {

  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setsearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 1,
    category: categories[1],
  });

  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const tabBarHeight = useBottomTabBarHeight();

  // console.log("sortedCofee = ", sortedCoffee.length);

  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  if (!fontsLoaded)
    return null;

  return (
    <View onLayout={onLayoutRootView} style={styles.ScreenContainer}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
        {/* APP HEADER */}
        <HearderBar />

        <Text style={styles.ScreenTitle}>Find the best{'\n'}cofee for you</Text>

        {/* Search Imput */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons
              style={styles.InputIcon}
              name='search'
              size={18}
              color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={text => setsearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
        </View>

        {/* Categoty ScrollView */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}
            >
              <TouchableOpacity 
                style={styles.CategoryScrollViewItem} 
                onPress={() => {
                  setCategoryIndex({index: index, category: categories[index]})
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                    
                  ]);
                 }}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index 
                      ? { color: COLORS.primaryOrangeHex } 
                      : {},
                  ]}

                >{data}</Text>
                {categoryIndex.index == index ? <View style={styles.ActiveCategory} /> : <></>}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee FlatList */}

        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.FlatlistContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <CoffeeCard 
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  rosted={item.rosted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_igredient={item.special_igredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={() => {}}
                />
              </TouchableOpacity>
            );
          }}
        />

        {/* Beans FlatList */}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: 30,
    fontFamily: 'Poppins-Semibold',
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
  },
  InputContainerComponent: {
    margin: 30,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center'
  },
  TextInputContainer: {
    flex: 1,
    height: 20 * 3,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: COLORS.primaryWhiteHex,
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,

  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  CategoryText: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  FlatlistContainer:{
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },

})

export default HomeScreen