import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_300Light } from '@expo-google-fonts/poppins';

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': Poppins_400Regular,   
        'Poppins-Semibold': Poppins_600SemiBold,
        'Poppins-Medium': Poppins_500Medium,
        'Poppins-Light': Poppins_300Light,
      });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return { fontsLoaded, onLayoutRootView };
}

export default useLoadFonts;