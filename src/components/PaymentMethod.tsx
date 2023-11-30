import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View, Image } from 'react-native'
import {
  COLORS,
  FONTSIZE,
} from '../theme/theme';
import { Entypo } from '@expo/vector-icons'
import styles from './styles/PaymentMethodStyle';

interface PaymentMethodProps{
  paymentMode: string;
  name: string;
  icon: any;
  isIcon: boolean
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({paymentMode, name, icon, isIcon}) => {
  return (
    <View
    style={[
      styles.PaymentCardContainer,
      {
        borderColor:
          paymentMode == name
            ? COLORS.primaryOrangeHex
            : COLORS.primaryGreyHex,
      },
    ]}
    >
      {isIcon ? (
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGradientWallet}>
        <View style={styles.WalletRow}>
          <Entypo
            name='wallet'
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_30}
          />
          <Text style={styles.PaymentTitle}>{name}</Text>
        </View>
        <Text style={styles.PaymentPrice}>$ 100.50</Text>
      </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientRegular}>
          <Image source={icon} style={styles.PaymentImage} />
          <Text style={styles.PaymentTitle}>{name}</Text>
        </LinearGradient>
      ) }
    </View>
  )
}

export default PaymentMethod