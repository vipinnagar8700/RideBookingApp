import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../../Helper/Colors';

const PhoneSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (number) => {
    // Ensure only digits are accepted and limit the length to 10
    const formattedNumber = number.replace(/[^\d]/g, '').slice(0, 10);
    setPhoneNumber(formattedNumber);
  };

  const handleNextPress = () => {
    // Add functionality to handle 'Next' button press
    // For example, navigate to the next screen or perform some action
    console.log('Next button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo2.jpg')} style={styles.logo} />
        <Text style={styles.headerText}>Help</Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.titleText}>What's your number?</Text>
        <Text style={styles.subtitleText}>Enter your phone number to proceed</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../../assets/in.png')} // Path to your Indian flag image
            style={styles.flagIcon}
          />
          <View style={styles.countryCodeContainer}>
            <Text style={styles.countryCodeText}>+91</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="000-000-0000"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            maxLength={10} // Limit input to 10 characters
          />
        </View>
        <View  style={{paddingVertical:20}}>
          <Text style={{color:Colors.BLACK,fontFamily:'appfont-light',fontSize:13}}>By continuing ,you agree to the T&C and Privacy Policy</Text>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.BLACK,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
    position: 'relative',
    padding:5
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginLeft: 15,
  },
  countryCodeContainer: {
    position: 'absolute',
    left: 65,
    top: 13,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  countryCodeText: {
    fontSize: 16,
    fontFamily: 'appfont-medium',
  },
  textInput: {
    flex: 1,
    padding: 5,
    marginLeft: 51,
    fontFamily: 'appfont-medium',
  },
  header: {
    backgroundColor: Colors.WHITE,
    paddingTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    borderRadius: 15,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 25,
    fontFamily: 'appfont-medium',
    color: Colors.BACKGROUND,
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  titleText: {
    fontFamily: 'appfont-medium',
    fontSize: 20,
    color: Colors.BACKGROUND,
  },
  subtitleText: {
    fontFamily: 'appfont-medium',
    fontSize: 15,
    color: Colors.BLACK,
  },
  nextButton: {
    backgroundColor: Colors.BACKGROUND,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20, 
  },
  nextButtonText: {
    color: Colors.WHITE,
    fontFamily: 'appfont-medium',
    fontSize: 18,
  },
});

export default PhoneSignIn;
