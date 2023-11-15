import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
    <View>
      <Text>PaymentFooter</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default PaymentFooter