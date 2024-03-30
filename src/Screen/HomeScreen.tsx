import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, Modal, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import Colors from '../Helper/Colors';

const HomeScreen = () => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    // Fetch user's current location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
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

      // Set the current location for the current location fetch icon
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // Reverse geocoding to get location name based on coordinates
      let locationName = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setSearchValue(`${locationName[0].formattedAddress}`); // Set the location name in the search bar
    })();
  }, []);

  const fetchCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    // Update the map region to the fetched current location
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
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setSelectedLocation(coordinate);
    setModalVisible(true); // Show modal when a location is selected
  };

  return (
    <View style={styles.container}>
      {/* Google Maps component */}
      <MapView style={styles.map} region={initialRegion} onPress={handleMapPress}>
        {initialRegion && <Marker coordinate={initialRegion} title="Your Current Location" />}
        {currentLocation && <Marker coordinate={currentLocation} title="Your Current Location" />}
        {selectedLocation && <Marker coordinate={selectedLocation} title="Selected Location" />}
      </MapView>
      {/* Current location icon */}
      {currentLocation && (
        <TouchableOpacity style={[styles.currentLocationContainer, { backgroundColor: Colors.WHITE, padding: 10, borderRadius: 50, elevation: 3 }]} onPress={fetchCurrentLocation}>
          <MaterialIcons name="my-location" size={24} color={Colors.YELLOW} />
        </TouchableOpacity>
      )}
      {/* Header with menu icon and search input */}
      <View style={styles.header}>
        <View style={{ backgroundColor: Colors.WHITE, padding: 10, borderRadius: 50, elevation: 3 }}>
          <MaterialIcons name="menu" size={24} color="black" />
        </View>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Your Current Location"
            placeholderTextColor="#777"
            onChangeText={(text) => setSearchValue(text)}
            value={searchValue}
          />
        </View>
      </View>
      {/* Modal for showing details of the selected location */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TextInput
            style={styles.searchInputa}
            placeholder="Where are you going?"
            placeholderTextColor={Colors.BACKGROUND}
          />
          <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
            <Text style={{fontFamily:"appfont-medium",fontSize:18,color:Colors.BLACK}}>
                Explore
            </Text>
            <Text style={{fontFamily:"appfont-light",fontSize:14,color:Colors.BLACK}}>
                View All
            </Text>
          </View>
          <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Image source={require('../../assets/in.png')} style={styles.gridItemImage} />
          <Text style={styles.gridItemText}>Bike</Text>
        </View>
        <View style={styles.gridItem}>
          <Image source={require('../../assets/in.png')} style={styles.gridItemImage} />
          <Text style={styles.gridItemText}>Auto</Text>
        </View>
        <View style={styles.gridItem}>
          <Image source={require('../../assets/in.png')} style={styles.gridItemImage} />
          <Text style={styles.gridItemText}>Cab</Text>
        </View>
        <View style={styles.gridItem}>
          <Image source={require('../../assets/in.png')} style={styles.gridItemImage} />
          <Text style={styles.gridItemText}>Parcel</Text>
        </View>
      </View>
            {/* You can add more details about the selected location here */}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'transparent',
    elevation: 3,
  },
  searchInputContainer: {
    flex: 1,
    marginLeft: 10,
  },
  searchInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: 25,
    backgroundColor: Colors.WHITE,
    elevation: 3,
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
    fontFamily:'appfont-medium'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  currentLocationContainer: {
    position: 'absolute',
    zIndex: 999,
    bottom: '2%',
    right: '2%',
    transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust position based on icon size
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width:'100%'
  },
  modalContent: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    elevation: 5, width:'100%'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '20%',
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  gridItemImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,margin:10
  },
  gridItemText: {
    marginTop: 5,
    fontSize: 13,
    fontFamily:'appfont-medium'
  },
});

export default HomeScreen;
