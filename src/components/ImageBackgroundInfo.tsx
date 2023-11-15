import React from 'react'
import { StyleSheet, Text, View, ImageProps, ImageBackground, TouchableOpacity } from 'react-native'
import BGIcon from './BGIcon';
import GradientBGIcon from './GradientBGIcon';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { Entypo } from '@expo/vector-icons'
import CustomIcon from './CustomIcon';

interface ImageBackgrounInfoProps {
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
  ToggleFavourite: any;
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
  ToggleFavourite,
}) => {
  return (
    <View style={{ marginTop: '8%' }}>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ItemBackgroundImage}
      >
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}>
              <GradientBGIcon
                name='chevron-left'
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}
            >
              <GradientBGIcon
                name='heart'
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderBarContainerWithoutBack}>
            {/* <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}
            >
              <GradientBGIcon
                name='chevron-left'
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}
            >
              <GradientBGIcon
                name='heart'
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubtitleText}>{special_ingredient}</Text>
              </View>
              <View>
                <View>
                  <CustomIcon
                    name={type == 'Bean' ? 'bean' : 'beans'}
                    size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_20}
                    color={COLORS.primaryOrangeHex}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between'
  },
  ImageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ImageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  ImageInfoOuterContainer:{},
  ImageInfoInnerContainer:{},
  InfoContainerRow:{},
  ItemTitleText:{},
  ItemSubtitleText:{},

})

export default ImageBackgroundInfo