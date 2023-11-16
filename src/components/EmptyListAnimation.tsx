import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'
import { COLORS, FONTSIZE } from '../theme/theme';

interface EmptyListAnimationProps{
    title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({title}) => {
  return (
    <View>
      <LottieView
      style={styles.EmptyCartContainer}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    EmptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      LottieStyle: {
        height: 300,
      },
      LottieText: {
        fontFamily: 'Poppins_Medium',
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryOrangeHex,
        textAlign: 'center',
      },
})

export default EmptyListAnimation