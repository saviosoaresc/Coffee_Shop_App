import React, {useState} from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import { useStore } from '../store/store'
import { COLORS } from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';



const DetailsScreen = ({navigation, route}: any) => {

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id)
  };

  //funcao para fechar a tela de Detalhes
  const BackHandler = () => {
    navigation.pop();
  }

  const ItemOfIdex = useStore((state: any) => 
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemOfIdex.imagelink_portrait}
          type={ItemOfIdex.type}
          id={ItemOfIdex.id}
          favourite={ItemOfIdex.favourite}
          name={ItemOfIdex.name}
          special_ingredient={ItemOfIdex.special_ingredient}
          ingredients={ItemOfIdex.ingredients}
          average_rating={ItemOfIdex.average_rating}
          ratings_count={ItemOfIdex.ratings_count}
          rosted={ItemOfIdex.rosted}
          //chama o fechar a tela
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  ScreenContainer:{
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex:{
    flexGrow: 1,
  },
})

export default DetailsScreen