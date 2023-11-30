import React, { useState } from 'react'
import {
  StyleSheet, Text, View,
  StatusBar, ScrollView, TouchableOpacity
} from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import {COLORS} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PopUpAnimation from '../components/PopUpAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';
import { useStore } from '../store/store';
import styles from './styles/OrderHistoryScreenStyle';


const OrderHistoryScreen = ({ navigation }: any) => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const removeAllItemsInOrderHistoryList = useStore((state: any) => state.removeAllItemsInOrderHistoryList);
  const tabBarHeight = useBottomTabBarHeight();
  const [showAnimation, setShowAnimation] = useState(false);

  const navigationHandler = ({ index, id, type }: any) => {
    navigation.push('Details', {
      index, id, type,
    })
  }

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      removeAllItemsInOrderHistoryList()
    }, 3000);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require('../lottie/coffeeDownload.json')}
        />
      ) : (
        <></>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View
          style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}>
          <HeaderBar title="Historico de Pedidos" />
          {/* if there is no data in the list */}
          <View style={styles.ItemContainer}>
            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={'No Order Histoy'} />
            ) : (
              <View style={styles.ListItemContainer}>
            {/* // render all orders history cards */}
                {OrderHistoryList.map((data: any, index: number) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate} />
                ))}
              </View>
            )}
          </View>
          {OrderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={styles.DownloadButton}
              onPress={() => {
                buttonPressHandler();
              }}>
              <Text style={styles.ButtonText}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  )
}



export default OrderHistoryScreen