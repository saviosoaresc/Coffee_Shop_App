import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, Alert } from 'react-native'
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import useLoadFonts from '../hooks/useLoadFonts';
import * as SplashScreen from 'expo-splash-screen'
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';
import { auth } from "../../Firebase/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

interface HearderBarProps {
    title?: string;
}

const HearderBar: React.FC<HearderBarProps> = ({ title }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { fontsLoaded, onLayoutRootView } = useLoadFonts();
    if (!fontsLoaded)
        return null;

    function handleLogOut() {
        signOut(auth)
            .then(() => {
                console.log(auth);
                Alert.alert("USUARIO DESLOGADO", "Voce saiu do App, reseta-o e entre novamente para fazer um novo login!")
            })
            .catch((error) => console.log(error));
    }

    return (
        <View style={styles.HearderContainer}>
            <TouchableOpacity onPress={() => {
                handleLogOut();
            }}>
                <GradientBGIcon name='sign-out' color={COLORS.primaryLightGreyHex} size={26} />
            </TouchableOpacity>
            <Text style={styles.HeaderText}>{title}</Text>
            <TouchableOpacity onPress={() => {
                setModalVisible(!modalVisible);
            }}>
                <ProfilePic />
            </TouchableOpacity>



            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <BlurView style={StyleSheet.absoluteFill} intensity={36} tint="dark" />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://i.imgur.com/XfF6uLX.png' }}
                        />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <AntDesign name="closecircle" size={70} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    HearderContainer: {
        marginTop: '3%',
        padding: SPACING.space_24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: 'Poppins-Semibold',
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: '22%'
    },
    modalView: {
        // backgroundColor: "#6B6869",
        alignItems: "center",
        width: "94%",
    },
    image:{
        height: '50%',
        width: '94%',
        borderRadius: 30
    },
    closeButton:{
        marginTop: '30%'
    }
})

export default HearderBar