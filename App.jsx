import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import PaymentScreen from './src/screens/PaymentScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import TabNavigator from './src/navigators/TabNavigator';
import * as SplashScreen from 'expo-splash-screen';
import Login from './src/login';


const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    SplashScreen.hideAsync();
  }, [])
  return (
    <>
      {user ? (
        <NavigationContainer>
        <StatusBar style='light' />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Tab'
            component={TabNavigator}
            initialParams={{ setUser }}
            options={{ animation: 'slide_from_bottom' }}>
          </Stack.Screen>
  
          <Stack.Screen
            name='Details'
            component={DetailsScreen}
            initialParams={{ setUser }}
            options={{ animation: 'slide_from_bottom' }}>
          </Stack.Screen>
  
          <Stack.Screen
            name='Payment'
            component={PaymentScreen}
            initialParams={{ setUser }}
            options={{ animation: 'slide_from_bottom' }}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      ) : (
        <Login setUser={setUser}/>
      )}
    </>

  );
};
