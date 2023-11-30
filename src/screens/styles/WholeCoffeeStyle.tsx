import { StyleSheet } from "react-native"
import { COLORS, BORDERRADIUS, SPACING } from "../../theme/theme"

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex,
    },
    content:{
        width: '100%',
        height: '100%',
    },
    list:{
        padding: '1.5%',
        marginLeft: '2.5%',
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: BORDERRADIUS.radius_25,
    },
    CardLinearGradientContainer: {
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25
    },
    title:{
        alignItems: 'center',
        marginTop: '6%',
    },
    texto: {
        fontFamily: 'Poppins-Semibold',
        color: COLORS.primaryWhiteHex,
        fontSize: 18
    },
    
})
export default styles;