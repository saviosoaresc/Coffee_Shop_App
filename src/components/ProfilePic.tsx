import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import { COLORS, SPACING } from '../theme/theme'

export default function ProfilePic() {
    return (
          <View style={styles.ImageContainer}>
            <Image
              source={require('../assets/app_images/avatar.png')}
              style={styles.Image}
            />
          </View>
    )
}


const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: '100%',
    width: '100%'
  },
})
