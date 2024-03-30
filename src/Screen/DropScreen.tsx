import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Helper/Colors';

const DropScreen = () => {
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Drop</Text>
      </View>
     
      <View style={{borderColor:"#f5f5f5",borderWidth:1,margin:20,borderRadius:15,backgroundColor:"#f5f5f5",elevation:4}}> 
        <TextInput  style={{borderBottomColor:Colors.BLACK,borderBottomWidth:1,padding:5,marginHorizontal:20,fontFamily:'appfont-light'}} placeholder='Pickup Location'/>
        <TextInput style={{padding:5,marginHorizontal:20,fontFamily:'appfont-light'}} placeholder='Drop Location'/>
      </View>

      <View style={{borderColor:"#f5f5f5",borderWidth:1,marginHorizontal:20,borderRadius:15,backgroundColor:"#f5f5f5",elevation:4,padding:10,width:115}}>
        <Text style={{fontFamily:'appfont-medium'}}>Select on map</Text>
      </View>
      <View style={{borderBottomColor:Colors.BLACK,borderBottomWidth:1,marginVertical:10}}>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
       
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
       
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
       
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
       
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
       
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
       
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
       
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{  fontSize: 15,fontFamily:'appfont-medium' }}>
          Home
        </Text>
        <Text style={{ fontSize: 13,fontFamily:'appfont-light' }}>
          Jhatta Sector 159 Noida, Sector 159, Jhatta
        </Text>
       
      </View>
    </ScrollView>

    </View>
  );
};

export default DropScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 10,
    fontFamily:'appfont-medium'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    fontFamily:'appfont-medium'
  },
});
