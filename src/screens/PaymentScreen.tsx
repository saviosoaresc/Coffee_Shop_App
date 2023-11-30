import React, { useState } from 'react'
import {
  StyleSheet, Text, View,
  StatusBar, ScrollView, TouchableOpacity
} from 'react-native'
import {
  BORDERRADIUS,
  COLORS,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import PopUpAnimation from '../components/PopUpAnimation';
import PaymentFooter from '../components/PaymentFooter';
import { LinearGradient } from 'expo-linear-gradient';
import GradientBGIcon from '../components/GradientBGIcon';
import { useStore } from '../store/store';
import PaymentMethod from '../components/PaymentMethod';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import styles from './styles/PaymentScreenStyle';

const PaymentList = [
  {
    name: 'Wallet',
    icon: require('../assets/app_images/wallet.png'),
    isIcons: true
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcons: false
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcons: false
  },
  {
    name: 'Amaz. Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcons: false
  },
];

const PaymentScreen = ({navigation, route}: any) => {

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore((state: any) => state.addToOrderHistoryListFromCart);

  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [showAnimation, setShowAnimation] = useState(false);

  const buttonPressHandler = () => {
    //seta a animacao como true
    setShowAnimation(true);
    //adiciona para lista de HistoryFromCart
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    // deixa a animacao durante 5 segundos, ao acabar encerra a animacao e navega pro History
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('History');
      }, 3000);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      {showAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/successful.json')}
        />
      ) : (
        <></>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
          >
            <GradientBGIcon name='chevron-left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Payment</Text>
          <View style={styles.EmptyView}/>
        </View>


        <View style={styles.PaymentOptionsContainer}>
          <TouchableOpacity
            onPress={() => {
              setPaymentMode('Credit Card')
            }}
          >
            <View
              style={[
                styles.CreditCardContainer,
                {
                  borderColor:
                    paymentMode == 'Credit Card'
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}
            >
              <Text style={styles.CreditCardTitle}>Credit Card</Text>
              <View style={styles.CreditCardBG}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.LinearGradientStyle}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                >
                  <View style={styles.CreditCardRow}>
                    <MaterialCommunityIcons
                      name='credit-card-chip'
                      size={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}
                    />
                    <Fontisto
                      name='visa'
                      size={FONTSIZE.size_30 * 2}
                      color={COLORS.primaryWhiteHex}
                    />
                  </View>
                  <View style={styles.CreditCardNumberContainer}>
                    <Text style={styles.CreditCardNumber}>0001</Text>
                    <Text style={styles.CreditCardNumber}>1222</Text>
                    <Text style={styles.CreditCardNumber}>3444</Text>
                    <Text style={styles.CreditCardNumber}>5556</Text>
                  </View>
                  <View style={styles.CreditCardRow}>
                    <View style={styles.CreditCardNameContainer}>
                      <Text style={styles.CreditCardNameSubitle}>
                        Card Holder Name
                      </Text>
                      <Text style={styles.CreditCardNameTitle}>
                        SAVIO C SOARES
                      </Text>
                    </View>
                    <View style={styles.CreditCardDateContainer}>
                      <Text style={styles.CreditCardNameSubitle}>
                        Expiry Date
                      </Text>
                      <Text style={styles.CreditCardNameTitle}>02/30</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={()=>{setPaymentMode(data.name)}}
            >
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode}`}
        price={{price: route.params.amount, currency: '$'}}
        buttonPressHandler={buttonPressHandler}
      />
    </View>
  )
}



export default PaymentScreen