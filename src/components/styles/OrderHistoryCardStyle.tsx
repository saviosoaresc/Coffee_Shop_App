import { StyleSheet } from "react-native"
import {
    COLORS,
    FONTSIZE, SPACING,
  } from '../../theme/theme'



  const styles = StyleSheet.create({
    CardContainer: {
      gap: SPACING.space_10,
    },
    CardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: SPACING.space_20,
      alignItems: 'center',
    },
    HeaderTitle: {
      fontFamily: 'Poppins-Semibold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    HeaderSubtitle: {
      fontFamily: 'Poppins-Light',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    PriceContainer: {
      alignItems: 'flex-end',
    },
    HeaderPrice: {
      fontFamily: 'Poppins-Medium',
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryOrangeHex,
    },
    ListContainer: {
      gap: SPACING.space_20,
    },
  })
  

  export default styles