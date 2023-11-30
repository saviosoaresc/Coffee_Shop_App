import { StyleSheet } from "react-native"
import {
    COLORS, BORDERRADIUS, 
    FONTSIZE, SPACING,
  } from '../../theme/theme'



  const styles = StyleSheet.create({
    PriceFooter:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_20,
        marginBottom: '5%'
        // padding: SPACING.space_18,
    },
    PriceContainer:{
        alignItems: 'center',
        width: 100,
    },
    PriceTitle:{
        fontFamily: 'Poppins-Medium',
        fontSize: FONTSIZE.size_14,
        color: COLORS.secondaryLightGreyHex,
    },
    PriceText:{
        fontFamily: 'Poppins-Semibold',
        fontSize: FONTSIZE.size_24,
        color: COLORS.primaryOrangeHex,
    },
    Price:{
        color: COLORS.primaryWhiteHex
    },
    PayButton:{
        backgroundColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        height: SPACING.space_28 * 2,
        width: '60%'

    },
    ButtonText:{
        fontFamily: 'Poppins-Semibold',
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
})
  

  export default styles