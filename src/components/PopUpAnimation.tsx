import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../theme/theme'
import LottieView from 'lottie-react-native'

interface PopUpAnimationProps {
  style: any;
  source: string;
}

const PopUpAnimation: React.FC<PopUpAnimationProps> = ({ style, source }) => {
  return (
    <View style={styles.LottieAnimationContainer}>
      <LottieView style={style} source={source} autoPlay loop={true} />
    </View>
  )
}


const styles = StyleSheet.create({
  LottieAnimationContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default PopUpAnimation