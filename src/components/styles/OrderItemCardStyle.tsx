import { StyleSheet } from "react-native"
import {
    COLORS, BORDERRADIUS,
    FONTSIZE, SPACING,
  } from '../../theme/theme'




  const styles = StyleSheet.create({
    CardLinearGradient: {
        gap: SPACING.space_20,
        padding: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_25,
      },
      CardInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      CardImageInfoContainer: {
        flexDirection: 'row',
        gap: SPACING.space_20,
        alignItems: 'center',
      },
      Image: {
        height: 90,
        width: 90,
        borderRadius: BORDERRADIUS.radius_15,
      },
      CardTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
        marginLeft: -10
      },
      CardSubtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: FONTSIZE.size_12,
        color: COLORS.secondaryLightGreyHex,
      },
      CardCurrency: {
        fontFamily: 'Poppins-Semibold',
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryOrangeHex,
      },
      CardPrice: {
        color: COLORS.primaryWhiteHex,
      },
      CardTableRow: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      SizeBoxLeft: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 45,
        flex: 1,
        borderTopLeftRadius: BORDERRADIUS.radius_10,
        borderBottomLeftRadius: BORDERRADIUS.radius_10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: COLORS.primaryGreyHex,
      },
      SizeText: {
        fontFamily: 'Poppins-Medium',
        color: COLORS.secondaryLightGreyHex,
      },
      PriceBoxRight: {
        backgroundColor: COLORS.primaryBlackHex,
        height: 45,
        flex: 1,
        borderTopRightRadius: BORDERRADIUS.radius_10,
        borderBottomRightRadius: BORDERRADIUS.radius_10,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: COLORS.primaryGreyHex,
      },
      PriceCurrency: {
        fontFamily: 'Poppins-Semibold',
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex,
      },
      Price: {
        color: COLORS.primaryWhiteHex,
      },
      CardQuantityPriceText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Poppins-Semibold',
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex,
      },
}) 

export default styles