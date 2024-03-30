import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import Colors from '../Helper/Colors';
import { AntDesign } from '@expo/vector-icons';

const LocationSelect = () => {
    const [count,setCount] = useState(0)
    const [initialRegion, setInitialRegion] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);

  console.log(searchValue,"searchValue")
  console.log(locationName,"locationName")

  useEffect(() => {
    // Fetch user's current location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setSelectedLocation(null)
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // Reverse geocoding to get location name based on coordinates
      let locationName = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    
      
      setSearchValue(`${locationName[0].formattedAddress}`); // Set the location name in the search bar
    })();
  }, [count]);



  useEffect(() => {
    if (selectedLocation) {
      fetchLocationName(selectedLocation);
    }
  }, [selectedLocation,count]);

  const fetchLocationName = async (coordinate) => {
    try {
      let locationName = await Location.reverseGeocodeAsync({
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      });
      if (locationName && locationName.length > 0) {
        setLocationName(locationName[0].formattedAddress);
      }
    } catch (error) {
      console.log("Error fetching location name:", error);
    }
  };


  const fetchCurrentLocation = async () => {
    setSelectedLocation(null)
    setLocationName(null)
    setCount(count + 1)
};



  const handleMapPress = (event) => {
    setSearchValue(null)
    const { coordinate } = event.nativeEvent;
    setSelectedLocation(coordinate);
  };

  return (
    <View style={styles.container}>
    {/* Google Maps component */}
    <MapView style={styles.map} region={initialRegion} onPress={handleMapPress}>
      {initialRegion && <Marker coordinate={initialRegion} title="Your Current Location" />}
      {selectedLocation && <Marker coordinate={selectedLocation} title="Selected Location" />}
    </MapView>
    {/* Current location icon */}
      <TouchableOpacity style={[styles.currentLocationContainera, { backgroundColor: Colors.WHITE, padding: 10, borderRadius: 50, elevation: 3 }]} >
        <AntDesign name="arrowleft" size={24} color={Colors.YELLOW} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.currentLocationContainer, { backgroundColor: Colors.WHITE, padding: 10, borderRadius: 50, elevation: 3 }]} onPress={fetchCurrentLocation}>
        <MaterialIcons name="my-location" size={24} color={Colors.YELLOW} />
      </TouchableOpacity>
   
    {/* View for showing details of the selected location */}
    
      <View style={styles.ViewContainer}>
        
        <View style={styles.ViewContent}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
          <Text style={{fontFamily:"appfont-medium",fontSize:18,color:Colors.BACKGROUND}}>
              Select your location
          </Text>
          <Text style={{fontFamily:"appfont-light",fontSize:14,color:Colors.BACKGROUND}}>
             Change
          </Text>
        </View>
        <TextInput
          style={styles.searchInputa}
          placeholder='Select a drop location'
          value={locationName !== null ? locationName : searchValue}
          editable={false} 
        />
        <View        style={{borderColor:Colors.YELLOW,borderWidth:1,alignItems:'center',marginVertical:10,borderRadius:20,elevation:5,backgroundColor:Colors.YELLOW}}>
            <Text style={{padding:10,fontFamily:'appfont-medium',color:Colors.WHITE}}>
Select Pickup
            </Text>
        </View>
     
      </View>
    </View>
  </View>
  )
}

export default LocationSelect


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchInputa: {
      padding: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 30,
      paddingHorizontal: 25,
      backgroundColor: Colors.WHITE,
      elevation: 3,
      fontSize:15,
      fontFamily:'appfont-medium',color:Colors.BACKGROUND
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    currentLocationContainer: {
      position: 'absolute',
      zIndex: 999,
      bottom: '25%',
      right: '2%',
      transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust position based on icon size
    },
    currentLocationContainera: {
        position: 'absolute',
        zIndex: 999,
        bottom: '25%',
        left: 30,
        transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust position based on icon size
      },
    ViewContainer: {
      alignItems: 'center',
      backgroundColor: Colors.WHITE,
      width:'100%',
      position:'absolute',
      bottom:0,
      borderTopRightRadius:30,
      borderTopLeftRadius:30
    },
    ViewContent: {
      backgroundColor: Colors.WHITE,
      padding: 20,
      borderRadius: 10,
      elevation: 5, width:'100%'
    },
   
  });
  
  