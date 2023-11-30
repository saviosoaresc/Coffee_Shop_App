import React from 'react'
import { 
  StyleSheet, View, StatusBar,
  ScrollView, TouchableOpacity
} from 'react-native'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import HeaderBar from '../components/HeaderBar'
import EmptyListAnimation from '../components/EmptyListAnimation'
import FavoritesItemCard from '../components/FavoritesItemCard'
import {COLORS, SPACING} from '../theme/theme';
import styles from './styles/FavoriteScreenStyle'

const FavoriteScreen = ({navigation}: any) => {
  const FavoritesList = useStore((state: any) => state.FavoritesList)
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList)
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList)
  const tabBarHeight = useBottomTabBarHeight();
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  }
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Favoritos" />

            {FavoritesList.length == 0 ? (
              <EmptyListAnimation title={'Sem Favoritos'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <FavoritesItemCard
                      id={data.id}
                      imagelink_portrait={data.imagelink_portrait}
                      name={data.name}
                      special_ingredient={data.special_ingredient}
                      type={data.type}
                      ingredients={data.ingredients}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      roasted={data.roasted}
                      description={data.description}
                      favourite={data.favourite}
                      ToggleFavouriteItem={ToggleFavourite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default FavoriteScreen