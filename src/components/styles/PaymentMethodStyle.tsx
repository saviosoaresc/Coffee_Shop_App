import { StyleSheet } from "react-native"
import {
    COLORS, BORDERRADIUS,
    FONTSIZE, SPACING,
  } from '../../theme/theme'




  const styles = StyleSheet.create({
    PaymentCardContainer: {
      borderRadius: BORDERRADIUS.radius_15 * 2,
      backgroundColor: COLORS.primaryGreyHex,
      borderWidth: 3,
    },
    LinearGradientWallet: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: SPACING.space_12,
      paddingHorizontal: SPACING.space_24,
      gap: SPACING.space_24,
      borderRadius: BORDERRADIUS.radius_15 * 2,
    },
    WalletRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: SPACING.space_24,
    },
    LinearGradientRegular: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: SPACING.space_12,
      paddingHorizontal: SPACING.space_24,
      gap: SPACING.space_24,
      borderRadius: BORDERRADIUS.radius_15 * 2,
    },
    PaymentTitle: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    PaymentPrice: {
      fontFamily: 'Poppins-Regular',
      fontSize: FONTSIZE.size_16,
      color: COLORS.secondaryLightGreyHex,
    },
    PaymentImage: {
      height: SPACING.space_30,
      width: SPACING.space_30,
    },
  })
  
  

  export default styles