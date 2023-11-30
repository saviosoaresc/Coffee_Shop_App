import { StyleSheet, Dimensions } from "react-native"
import {
    COLORS, BORDERRADIUS,
    FONTSIZE, SPACING,
  } from '../../theme/theme'

  const CARD_WIDTH = Dimensions.get('window').width * 0.32;

  const styles = StyleSheet.create({
    CardLinearGradientContainer: {
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25,
    },
    CardImageBG: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15,
        overflow: 'hidden',
    },
    CardRatingContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primaryBlackHex,
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_10,
        paddingHorizontal: SPACING.space_15,
        position: 'absolute',
        borderBottomLeftRadius: BORDERRADIUS.radius_20,
        borderTopRightRadius: BORDERRADIUS.radius_20,
        top: 0,
        right: 0,
    },
    CardRatingText: {
        fontFamily: 'Poppins-Medium',
        color: COLORS.primaryWhiteHex,
        lineHeight: 22,
        fontSize: FONTSIZE.size_14,
    },
    CardTitle: {
        fontFamily: 'Poppins-Medium',
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
    },
    CardSubTitle: {
        // fontFamily: 'Poppins-Light',
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
    },
    CardFooterBow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignSelf: 'center',
        marginTop: SPACING.space_15,
        // alignSelf: 'stretch'
    },
    CardPriceCurrency: {
        fontFamily: 'Poppins-Semibold',
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_18
    },
    CardPrice: {
        color: COLORS.primaryWhiteHex,
    },
})

  export default styles