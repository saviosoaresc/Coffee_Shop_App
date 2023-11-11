import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import useLoadFonts from '../hooks/useLoadFonts';
import * as SplashScreen from 'expo-splash-screen'
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

SplashScreen.preventAutoHideAsync();


interface HearderBarProps {
    title?: string;
}

const HearderBar: React.FC<HearderBarProps> = ({title}) => {
    const {fontsLoaded, onLayoutRootView} = useLoadFonts();
    if(!fontsLoaded)
        return null;

    return (
    <View style={styles.HearderContainer}>
        <GradientBGIcon name='ios-menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_28}/>
        <Text style={styles.HeaderText}>{title}</Text>
        <ProfilePic/>
    </View>
  )
}


const styles = StyleSheet.create({
    HearderContainer:{
        marginTop: '3%',
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText:{
        fontFamily: 'Poppins-Semibold',
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },

})

export default HearderBar