import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAWSei4w5Y7egO2DrKSC8_td-8skNgwZbM",
    authDomain: "fair-smoke-403222.firebaseapp.com",
    projectId: "fair-smoke-403222",
    storageBucket: "fair-smoke-403222.appspot.com",
    messagingSenderId: "19786405959",
    appId: "1:19786405959:web:2de26e9518da216b41b962",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app,
   {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export {auth}