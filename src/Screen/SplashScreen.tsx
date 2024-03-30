import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Rapido-logo.png')} style={{width:200,height:200,resizeMode:'contain'}}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });