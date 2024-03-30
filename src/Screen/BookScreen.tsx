import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import Colors from "../Helper/Colors";
import { AntDesign } from "@expo/vector-icons";

const BookScreen = () => {
  const [count, setCount] = useState(0);
  const [initialRegion, setInitialRegion] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [locationName, setLocationName] = useState(null);


  useEffect(() => {
    // Fetch user's current location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
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


  const fetchCurrentLocation = async () => {
    setLocationName(null);
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      {/* Google Maps component */}
      <MapView style={styles.map} region={initialRegion}>
        {initialRegion && (
          <Marker coordinate={initialRegion} title="Your Current Location" />
        )}
      </MapView>
      {/* Current location icon */}
      <TouchableOpacity
        style={[
          styles.currentLocationContainera,
          {
            backgroundColor: Colors.WHITE,
            padding: 10,
            borderRadius: 50,
            elevation: 3,
          },
        ]}
      >
        <AntDesign name="arrowleft" size={24} color={Colors.YELLOW} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.currentLocationContainer,
          {
            backgroundColor: Colors.WHITE,
            padding: 10,
            borderRadius: 50,
            elevation: 3,
          },
        ]}
        onPress={fetchCurrentLocation}
      >
        <MaterialIcons name="my-location" size={24} color={Colors.YELLOW} />
      </TouchableOpacity>

      <View style={styles.ViewContainer}>
        <ScrollView style={[styles.ViewContent],{height:320,paddingBottom:200,width:'90%',marginTop:10}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/in.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Bike</Text>
              <Text style={styles.description}>Quick bike ride</Text>
              <Text style={styles.distance}>3 min away</Text>
            </View>
            <Text style={styles.price}>$ 5</Text>
          </View>

          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/in.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Auto</Text>
              <Text style={styles.description}>Quick auto ride</Text>
              <Text style={styles.distance}>23 min away</Text>
            </View>
            <Text style={styles.price}>$ 55</Text>
          </View>

          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/in.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Cab</Text>
              <Text style={styles.description}>Quick cab ride</Text>
              <Text style={styles.distance}>13 min away</Text>
            </View>
            <Text style={styles.price}>$ 195</Text>
          </View>

          <View style={[styles.cardContainer,{marginBottom:130}]}>
            <Image
              style={styles.image}
              source={require("../../assets/in.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Bike Lite</Text>
              <Text style={styles.description}>Quick bike lite ride</Text>
              <Text style={styles.distance}>1 min away</Text>
            </View>
            <Text style={styles.price}>$ 1</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.ViewContainera}>
        <View style={styles.ViewContent}>
          <View style={styles.cardContaineraaa}>
              <Text style={styles.titlea}>Cash</Text>
            <Text style={styles.pricea}>Offers</Text>
          </View>
          <View style={styles.cardContaineraa}>
              <Text style={styles.title}>Book Ride</Text>
          </View>
        </View>
      </View>
           
           
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInputa: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    paddingHorizontal: 25,
    backgroundColor: Colors.WHITE,
    elevation: 3,
    fontSize: 15,
    fontFamily: "appfont-medium",
    color: Colors.BACKGROUND,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  currentLocationContainer: {
    position: "absolute",
    zIndex: 999,
    bottom: "43%",
    right: "2%",
    transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust position based on icon size
  },
  currentLocationContainera: {
    position: "absolute",
    zIndex: 999,
    bottom: "43%",
    left: 30,
    transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust position based on icon size
  },
  ViewContainer: {
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  ViewContainera: {
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  ViewContent: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: "100%"
  },
  cardContainer: {
    borderColor: Colors.BLACK,
    borderWidth: 1,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: Colors.BLACK,
    justifyContent: "space-between",
    flexDirection: "row", // Add flexDirection to align items horizontally
    paddingHorizontal: 10, // Add paddingHorizontal for spacing
    paddingVertical: 10,
  },
  cardContaineraaa:{
    alignItems: "center",
    marginVertical: 2,
    justifyContent: "space-between",
    flexDirection: "row", // Add flexDirection to align items horizontally
    paddingHorizontal: 10, // Add paddingHorizontal for spacing
  },
  cardContaineraa: {
    borderColor: Colors.YELLOW,
    borderWidth: 1,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: Colors.YELLOW,
    justifyContent: "center",
    flexDirection: "row", // Add flexDirection to align items horizontally
    paddingHorizontal: 10, // Add paddingHorizontal for spacing
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10, // Adjust margin as needed
  },
  image: {
    width: 50, // Adjust width as needed
    height: 50, // Adjust height as needed
    resizeMode: "contain",
  },
  title: {
    fontFamily: "appfont-medium",
    color: Colors.WHITE,
  },
  description: {
    fontFamily: "appfont-light",
    color: Colors.WHITE,
    fontSize: 12,
  },
  titlea: {
    fontFamily: "appfont-medium",
    color: Colors.BLACK,
  },
  distance: {
    fontFamily: "appfont-light",
    color: Colors.WHITE,
    fontSize: 10,
  },
  price: {
    fontFamily: "appfont-medium",
    color: Colors.WHITE,
  },
  pricea: {
    fontFamily: "appfont-medium",
    color: Colors.BLACK,
  },
});
