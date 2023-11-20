import React from 'react'
import { StyleSheet, Text, View, ImageProps, ImageBackground, TouchableOpacity } from 'react-native'
import BGIcon from './BGIcon';
import GradientBGIcon from './GradientBGIcon';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur';

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
  roasted: string;
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
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  return (
    <View style={styles.container}>
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
          <BlurView
            style={StyleSheet.absoluteFill}
            intensity={36}
            tint='dark'
          />
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubtitleText}>{special_ingredient}</Text>
              </View>
              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.ProperFirst}>
                  <MaterialCommunityIcons
                    name={type == 'Bean' ? 'alpha-b-circle' : 'coffee'}
                    size={type == 'Bean' ? FONTSIZE.size_20 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop: type == 'Bean' ? SPACING.space_4 + SPACING.space_2 : 0
                      }
                    ]}
                  >
                    {type}
                  </Text>
                </View>
                <View style={styles.ProperFirst}>
                  <Entypo
                    name={type == 'Bean' ? 'location-pin' : 'drop'}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={[styles.PropertyTextLast]}>{ingredients}</Text>
                </View>
              </View>
            </View>
            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <Entypo name='star' color={COLORS.primaryOrangeHex} size={FONTSIZE.size_20} />
                <Text style={styles.RatingText}>{average_rating}</Text>
                <Text style={styles.RatingCountText}>({ratings_count})</Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>

      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    // marginTop: '6%',
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20.4 / 26,
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithBack: {
    marginTop: '4%',
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithoutBack: {
    marginTop: '4%',
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
    overflow: 'hidden',
  },
  ImageInfoInnerContainer: {
    justifyContent: 'center',
    gap: SPACING.space_15
  },
  InfoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ItemTitleText: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20
  },
  ProperFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex
  },
  PropertyTextFirst: {
    fontFamily: 'Poppins-Medium',
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  PropertyTextLast: {
    fontFamily: 'Poppins-Medium',
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  RatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center'
  },
  RatingText: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex
  },
  RatingCountText: {
    fontFamily: 'Poppins-Regular',
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex
  },
  RoastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex
  },
  RoastedText: {
    fontFamily: 'Poppins-Regular',
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex
  },

})

export default ImageBackgroundInfo