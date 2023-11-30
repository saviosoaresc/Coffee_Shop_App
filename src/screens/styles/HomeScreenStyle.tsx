import { StyleSheet, Dimensions } from "react-native"
import { COLORS, SPACING, BORDERRADIUS, FONTSIZE } from "../../theme/theme"

const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
      flexGrow: 1,
    },
    ScreenTitle: {
      fontSize: 30,
      fontFamily: 'Poppins-Semibold',
      color: COLORS.primaryWhiteHex,
      paddingLeft: SPACING.space_30
    },
    InputContainerComponent: {
      margin: 30,
      flexDirection: 'row',
      borderRadius: 20,
      backgroundColor: COLORS.primaryDarkGreyHex,
      alignItems: 'center',
      marginTop: 6
    },
    TextInputContainer: {
      flex: 1,
      height: 20 * 3,
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      color: COLORS.primaryWhiteHex,
    },
    InputIcon: {
      marginHorizontal: SPACING.space_20
    },
    CategoryScrollViewStyle: {
      paddingHorizontal: SPACING.space_20,
      // marginBottom: SPACING.space_,
    },
    CategoryScrollViewContainer: {
      paddingHorizontal: SPACING.space_15,
  
    },
    ActiveCategory: {
      height: SPACING.space_10,
      width: SPACING.space_10,
      borderRadius: BORDERRADIUS.radius_10,
      backgroundColor: COLORS.primaryOrangeHex,
    },
    CategoryText: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryLightGreyHex,
      marginBottom: SPACING.space_4,
    },
    CategoryScrollViewItem: {
      alignItems: 'center',
    },
    FlatlistContainer: {
      gap: SPACING.space_20,
      paddingVertical: SPACING.space_20,
      paddingHorizontal: SPACING.space_30,
    },
    EmptyListContainer: {
      width: Dimensions.get('window').width - SPACING.space_30 * 2,
      alignItems: 'center',
      paddingVertical: SPACING.space_30,
    },
    CoffeeBeansTitle: {
      fontSize: FONTSIZE.size_18,
      marginLeft: SPACING.space_30,
      marginTop: SPACING.space_2,
      fontFamily: 'Poppins-Medium',
      color: COLORS.secondaryLightGreyHex
    },
  
  
  })

  export default styles