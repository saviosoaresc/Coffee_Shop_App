import { StyleSheet } from "react-native"
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../../theme/theme"

const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
      flexGrow: 1,
      justifyContent: 'space-between'
    },
    FooterInfoArea: {
      padding: SPACING.space_20
    },
    InfoTitle: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
      marginBottom: SPACING.space_10
    },
    DescriptionText: {
      letterSpacing: 0.5,
      fontFamily: 'Poppins-Regular',
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
      marginBottom: SPACING.space_30
    },
    SizeOuterContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: SPACING.space_20
    },
    SizeBox: {
      flex: 1,
      backgroundColor: COLORS.primaryDarkGreyHex,
      alignItems: 'center',
      justifyContent: 'center',
      height: SPACING.space_24 * 2,
      borderRadius: BORDERRADIUS.radius_10,
      borderWidth: 2
    },
    SizeText: {
      fontFamily: 'Poppins-Medium'
    },
  })

  export default styles