import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StyleSheet, View, Text, ImageProps, FlatList } from 'react-native'
import ImageBackgroundInfo from './ImageBackgroundInfo';

interface FavoritesItemCardProps{
  id: string;
  imagelink_portrait: ImageProps;
  name: string;
  special_ingredient: string;
  type: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  ToggleFavouriteItem: any;
}

const FavoritesItemCard: React.FC<FavoritesItemCardProps> = ({
  id,
  imagelink_portrait,
  name,
  special_ingredient,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  favourite,
  ToggleFavouriteItem,
}) => {
  return (
    <View style={styles.CardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavourite={ToggleFavouriteItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  CardContainer: {
    overflow: 'hidden',
    borderRadius: 30,
  },
})

export default FavoritesItemCard