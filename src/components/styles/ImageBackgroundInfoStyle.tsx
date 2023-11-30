import { StyleSheet } from "react-native"
import {
    COLORS, BORDERRADIUS,
    FONTSIZE, SPACING,
  } from '../../theme/theme'


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
  

  export default styles