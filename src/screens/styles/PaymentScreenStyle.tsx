import { StyleSheet, Dimensions } from "react-native"
import { COLORS, SPACING, BORDERRADIUS, FONTSIZE } from "../../theme/theme"


const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    LottieAnimation: {
      flex: 1,
    },
    ScrollViewFlex: {
      flexGrow: 0,
    },
    HeaderContainer: {
      paddingHorizontal: SPACING.space_24,
      paddingVertical: SPACING.space_15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '6%'
    },
    HeaderText: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_20,
      color: COLORS.primaryWhiteHex,
    },
    EmptyView: {
      height: SPACING.space_36,
      width: SPACING.space_36,
    },
    PaymentOptionsContainer: {
      padding: SPACING.space_15,
      gap: SPACING.space_15,
    },
    CreditCardContainer: {
      padding: SPACING.space_10,
      gap: SPACING.space_10,
      borderRadius: BORDERRADIUS.radius_15 * 2,
      borderWidth: 3,
    },
    CreditCardTitle: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
      marginLeft: SPACING.space_10,
    },
    CreditCardBG: {
      backgroundColor: COLORS.primaryGreyHex,
      borderRadius: BORDERRADIUS.radius_25,
    },
    LinearGradientStyle: {
      borderRadius: BORDERRADIUS.radius_25,
      gap: SPACING.space_36,
      paddingHorizontal: SPACING.space_15,
      paddingVertical: SPACING.space_10,
    },
    CreditCardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    CreditCardNumberContainer: {
      flexDirection: 'row',
      gap: SPACING.space_10,
      alignItems: 'center',
    },
    CreditCardNumber: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
      letterSpacing: SPACING.space_4 + SPACING.space_2,
    },
    CreditCardNameSubitle: {
      fontFamily: 'Poppins-Regular',
      fontSize: FONTSIZE.size_12,
      color: COLORS.secondaryLightGreyHex,
    },
    CreditCardNameTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
    },
    CreditCardNameContainer: {
      alignItems: 'flex-start',
    },
    CreditCardDateContainer: {
      alignItems: 'flex-end',
    },
  })

  export default styles