import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/theme';
import { BlurView } from 'expo-blur';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { Entypo, FontAwesome5, Ionicons } from 'react-native-vector-icons';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        // <View style={{borderRadius: 100}}>
            <Tab.Navigator
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBarStyle,

                    tabBarBackground: () => (
                        <BlurView tint='dark' intensity={30} style={styles.BlurViewStyle} />
                    ),
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Entypo
                                name='home'
                                size={25}
                                color={
                                    focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                }
                            />
                        ),
                    }}></Tab.Screen>
                <Tab.Screen
                    name='Cart'
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <FontAwesome5
                                name='shopping-bag'
                                size={25}
                                color={
                                    focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                }
                            />
                        ),
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name='Favorite'
                    component={FavoriteScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Entypo
                                name='heart'
                                size={25}
                                color={
                                    focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                }
                            />
                        ),
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name='History'
                    component={OrderHistoryScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name='notifications'
                                size={25}
                                color={
                                    focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                }
                            />
                        ),
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
        // </View>
    )
}


const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        borderTopColor: 'transparent',
        width: '90%',
        marginLeft: '6%',
        marginBottom: '2%',
        borderRadius: 100
    },
    BlurViewStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 100
    }

});

export default TabNavigator