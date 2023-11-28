import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import TabNavigator from './src/navigators/TabNavigator';
import * as SplashScreen from 'expo-splash-screen';
import Login from './src/Login';


const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    SplashScreen.hideAsync();
  }, [])
  return (
    <SafeAreaView>
      <Login/>
      {/* <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Tab'
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}>
        </Stack.Screen>

        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }}>
        </Stack.Screen>

        <Stack.Screen
          name='Payment'
          component={PaymentScreen}
          options={{ animation: 'slide_from_bottom' }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: { 
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});