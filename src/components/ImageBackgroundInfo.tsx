import React from 'react'
import { StyleSheet, Text, View, ImageProps, ImageBackground, TouchableOpacity } from 'react-native'
import BGIcon from './BGIcon';
import GradientBGIcon from './GradientBGIcon';
import { COLORS, FONTSIZE } from '../theme/theme';

interface ImageBackgrounInfoProps{
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  rosted: string;
  BackHandler?: any; 
  ToogleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgrounInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  rosted,
  BackHandler,
  ToogleFavourite,
}) => {
  return (
    <View style={{marginTop: '8%'}}>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ItemBackgroundImage}
      >
        {EnableBackHandler ? (
          <View>
            <TouchableOpacity>
              <GradientBGIcon
                name='chevron-left'
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ): (
          <></>
        )}
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  ItemBackgroundImage:{
    width: '100%',
    aspectRatio: 20/25,
    justifyContent: 'space-between'
  }
})

export default ImageBackgroundInfo