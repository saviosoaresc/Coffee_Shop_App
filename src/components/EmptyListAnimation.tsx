import React, {useRef, useEffect} from 'react'
import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native';
import { COLORS, FONTSIZE } from '../theme/theme';

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({ title }) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require('../lottie/coffee.json')}
        loop
        autoPlay
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  LottieStyle: {
    height: 200,
  },
  LottieText: {
    fontFamily: 'Poppins-Medium',
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
    marginTop: '4%'
  },
})

export default EmptyListAnimation