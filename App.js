import React from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from './src/Screen/SplashScreen';
import PhoneSignIn from './src/Screen/Auth/PhoneSignIn';
import { useFonts } from 'expo-font';
import OTPVerify from './src/Screen/Auth/OTPVerify';
import HomeScreen from './src/Screen/HomeScreen';
import DropScreen from './src/Screen/DropScreen';
import LocationSelect from './src/Screen/LocationSelect';
import BookScreen from './src/Screen/BookScreen';
export default function App() {


  
  const [fontsLoaded] = useFonts({
    'appfont-semi': require('./assets/fonts/Outfit-Black.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-extraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'appfont-extraLight': require('./assets/fonts/Outfit-ExtraLight.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf'),
    'appfont-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-semiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-thin': require('./assets/fonts/Outfit-Thin.ttf'),
  });
 

  
  
  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar hidden />
      {/* <SplashScreen/> */}
      {/* <PhoneSignIn /> */}
      {/* <OTPVerify/> */}
      {/* <HomeScreen/> */}
      {/* <DropScreen/> */}
      {/* <LocationSelect/> */}
      <BookScreen/>
    </>
  );
}
