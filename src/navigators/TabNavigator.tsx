import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/theme';
import { BlurView } from 'expo-blur';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,

                tabBarBackground: () => (
                    <BlurView tint='dark' intensity={30} style={StyleSheet.absoluteFill} />
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
    )
}


const styles = StyleSheet.create({
    tabBarStyle: {
        flex: 1,
        position: 'absolute',
        height: '8%',
        width: '78%',
        marginLeft: '11%',
        marginBottom: '5%',
        borderTopColor: 'transparent',
        overflow: 'hidden',
        borderRadius: 50
    }
});

export default TabNavigator