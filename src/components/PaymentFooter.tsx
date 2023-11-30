import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/PaymentFooterStyle';

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

export default PaymentFooter