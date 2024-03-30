import React, { useState,useRef  } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../../Helper/Colors';

const OTPVerify = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
  
    const handleOtpChange = (text, index) => {
      // Ensure only digits are accepted and limit the length to 1
      if (/^\d*$/.test(text) && text.length <= 1) {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
  
        // Move focus to the next input box if available
        if (text.length === 1 && index < 5) {
          inputRefs.current[index + 1].focus();
        }
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTexta}>Verify OTP</Text>
        <Text style={styles.headerText}>Help</Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.titleText}>Enter verification code</Text>
        <Text style={styles.subtitleText}>Send to 8700504218</Text>
        <View style={styles.inputContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleOtpChange(text, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
          ))}
        </View>
        <View style={{gap:14}}>
        <Text style={[styles.headerTextaa,{borderColor:Colors.BLACK,borderWidth:1,width:102}]}>Resend in 14s</Text>
        <Text style={[styles.headerTextaa,{borderColor:Colors.BLACK,borderWidth:1,width:138}]}>Send Via Whatsapp</Text>
        </View>
        
        <View  style={{paddingVertical:20}}>
          <Text style={{color:Colors.BLACK,fontFamily:'appfont-light',fontSize:13,alignItems:"center",justifyContent:"center",alignContent:'center'}}>
            By tapping on "Send via Whatsapp" you agree to receive important communication such as OTP and payment details over whatsapp
          </Text>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={() => console.log('Verify pressed')}>
          <Text style={styles.nextButtonText}>Verify</Text>
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
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  otpInput: {
    width: 45,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'appfont-medium',
  },
  header: {
    backgroundColor: Colors.WHITE,
    paddingTop: 20,
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
  headerTexta: {
    fontSize: 20,
    padding: 5,
    fontFamily: 'appfont-medium',
    color: Colors.BACKGROUND,
  },
  headerTextaa: {
    fontSize: 12,
    borderRadius: 15,
    borderColor: Colors.BLACK,
    padding: 5,
    paddingHorizontal: 15,
    fontFamily: 'appfont-medium',
    color: Colors.BLACK,
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

export default OTPVerify;
