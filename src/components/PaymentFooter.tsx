import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface PriceProps{
    price: string;
    currency: string
}

interface PaymentFooterProps{
    price: PriceProps;
    buttonPressHandler: any;
    buttonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
    price,
    buttonPressHandler,
    buttonTitle,
}) => {
  return (
    <View style={styles.PriceFooter}>
      <View style={styles.PriceContainer}>
        <Text style={styles.PriceTitle}>Price</Text>
        <Text style={styles.PriceText}>
            {price.currency}
            <Text style={styles.Price}>{price.price}</Text>
        </Text>
      </View>
      <TouchableOpacity 
      style={styles.PayButton}
      onPress={() => buttonPressHandler()}>
        <Text style={styles.ButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    PriceFooter:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_20,
        marginBottom: '3%'
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
        height: SPACING.space_28 * 1.8,
        width: '50%'

    },
    ButtonText:{
        fontFamily: 'Poppins-Semibold',
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
})

export default PaymentFooter