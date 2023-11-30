import { StyleSheet } from "react-native"
import { COLORS, SPACING } from "../../theme/theme"

const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
      flexGrow: 1,
    },
    ScrollViewInnerView: {
      flex: 1,
      justifyContent: 'space-between',
    },
    ItemContainer: {
      flex: 1,
    },
    ListItemContainer: {
      paddingHorizontal: SPACING.space_20,
      gap: SPACING.space_20,
    },
    contentFooter: {
      marginTop: '2%'
    }
  })

  export default styles