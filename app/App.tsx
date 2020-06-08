import 'react-native-gesture-handler';
import React from 'react';
import { AppLoading } from 'expo';
import { Assistant_800ExtraBold, useFonts } from '@expo-google-fonts/assistant'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Assistant_800ExtraBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  return !fontsLoaded ? (<AppLoading />) : (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}

export default App
