import { StyleSheet } from "react-native"
import {
    COLORS, BORDERRADIUS,
    FONTSIZE, SPACING,
  } from '../../theme/theme'


const styles = StyleSheet.create({
    CartItemLinearGradient: {
      flex: 1,
      gap: SPACING.space_12,
      padding: SPACING.space_12,
      borderRadius: BORDERRADIUS.radius_25,
    },
    CartItemRow: {
      flexDirection: 'row',
      gap: SPACING.space_12,
      flex: 1,
    },
    CartItemImage: {
      height: 130,
      width: 130,
      borderRadius: BORDERRADIUS.radius_20,
    },
    CartItemInfo: {
      flex: 1,
      paddingVertical: SPACING.space_4,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    CartItemTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
    },
    CartItemSubtitle: {
      fontFamily: 'Poppins-Regular',
      fontSize: FONTSIZE.size_12,
      color: COLORS.secondaryLightGreyHex,
    },
    CartItemRoastedContainer: {
      height: 50,
      width: 50 * 2 + SPACING.space_20,
      borderRadius: BORDERRADIUS.radius_15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primaryDarkGreyHex,
    },
    CartItemRoastedText: {
      fontFamily: 'Poppins-Regular',
      fontSize: FONTSIZE.size_10,
      color: COLORS.primaryWhiteHex,
    },
    CartItemSizeRowContainer: {
      flex: 1,
      alignItems: 'center',
      gap: SPACING.space_20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    CartItemSizeValueContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    SizeBox: {
      backgroundColor: COLORS.primaryBlackHex,
      height: 40,
      width: 100,
      borderRadius: BORDERRADIUS.radius_10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    SizeText: {
      fontFamily: 'Poppins-Medium',
      color: COLORS.secondaryLightGreyHex,
    },
    SizeCurrency: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryOrangeHex,
    },
    SizePrice: {
      color: COLORS.primaryWhiteHex,
    },
    CartItemIcon: {
      backgroundColor: COLORS.primaryOrangeHex,
      padding: SPACING.space_12,
      borderRadius: BORDERRADIUS.radius_10,
    },
    CartItemQuantityContainer: {
      backgroundColor: COLORS.primaryBlackHex,
      width: 80,
      borderRadius: BORDERRADIUS.radius_10,
      borderWidth: 2,
      borderColor: COLORS.primaryOrangeHex,
      alignItems: 'center',
      paddingVertical: SPACING.space_4,
    },
    CartItemQuantityText: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    CartItemSingleLinearGradient: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: SPACING.space_12,
      gap: SPACING.space_12,
      borderRadius: BORDERRADIUS.radius_25,
    },
    CartItemSingleImage: {
      height: 150,
      width: 150,
      borderRadius: BORDERRADIUS.radius_20,
    },
    CartItemSingleInfoContainer: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'space-around',
    },
    CartItemSingleSizeValueContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    CartItemSingleQuantityContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  })

  export default styles