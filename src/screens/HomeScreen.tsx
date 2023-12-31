import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text, View, StatusBar,
  ScrollView, TouchableOpacity, TextInput,
  FlatList, Dimensions, ToastAndroid
} from 'react-native';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import useLoadFonts from '../hooks/useLoadFonts';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import CoffeeCard from '../components/CoffeeCard';
import { current } from 'immer';
import styles from './styles/HomeScreenStyle';


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

const HomeScreen = ({ navigation }) => { 


  // constante que puxa os dados do arquivo store pegando os coffee
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  // constante que puxa os dados do arquivo store pegando os beans
  const BeanList = useStore((state: any) => state.BeanList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setsearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 1,
    category: categories[1],
  });

  //constante que ira sortear os coffee por categoria
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  //constante que faz a pesquisa de acordo com o texto
  //o texto eh a string 'search'
  const searchCoffee = (search: string) => {
    //se tiver vazio fica no inicio: offset = 0
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      //se n tiver vazio index fica zerado e a categoria fica na posicao 0
      setCategoryIndex({ index: 0, category: categories[0] });
      //sorteio os coffee fazendo um filtro transformando tanto o search quanto o nome do item como LowerCase
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({ index: 0, category: categories[0] });
    //sorteia os coffee com toda a lista
    setSortedCoffee([...CoffeeList]);
    //limpa o input de search
    setsearchText('');
  }

  const CoffeeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_igredient,
    type,
    prices,
  }: any) => {

    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_igredient,
      type,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(`${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    )
  }

  //constante que roda as fontes 
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  if (!fontsLoaded)
    return null;

  return (
    <View onLayout={onLayoutRootView} style={styles.ScreenContainer}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
        {/* APP HEADER */}
        <HeaderBar/>

        <Text style={styles.ScreenTitle}>Find the best{'\n'}coffee for you</Text>

        {/* Search Imput */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={() => {
            searchCoffee(searchText);
          }}>
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
            onChangeText={text => {
              setsearchText(text)
              searchCoffee(searchText);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <Ionicons
              onPress={() => {
                resetSearchCoffee();
              }}
              style={styles.InputIcon}
              name='close'
              size={FONTSIZE.size_16}
              color={COLORS.primaryLightGreyHex}
            />
          ) : (
            <></>
          )}
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
                  //faz com que ao passar de categoria ele volte pra o inicio
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  })
                  setCategoryIndex({ index: index, category: categories[index] })
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
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No Coffee Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.FlatlistContainer}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type
                  })
                }}>
                {/* passa pro CoffeeCard todos esses parametros */}
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.rosted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />

        <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text>

        {/* Beans FlatList */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          //dados da BeanList
          data={BeanList}
          contentContainerStyle={[styles.FlatlistContainer, { marginBottom: tabBarHeight }]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type
                  })
                }}>
                {/* passa pro CoffeeCard todos esses parametros */}
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.rosted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  )
}



export default HomeScreen