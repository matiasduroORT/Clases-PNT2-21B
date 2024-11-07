import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from 'react-native-maps-directions'
import { Ionicons } from "@expo/vector-icons";

export default function MapTabScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const APIKEY='AIzaSyCZVqSrxlAxhaeaF7bAxshgnK1yUSKHTX8'

  const mapRef = useRef(null)

  // -34.6127225,-58.4283633

  const pins = [
    {
      name: "Punto 1",
      description: "Descripción breve del Punto 1",
      latitude: -34.6037,
      longitude: -58.3816,
    },
    {
      name: "Punto 2",
      description: "Descripción breve del Punto 2",
      latitude: -34.6158,
      longitude: -58.4325,
    },
    {
      name: "Punto 3",
      description: "Descripción breve del Punto 3",
      latitude: -34.6079,
      longitude: -58.4455,
    },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permiso Denegado");
        return;
      }
      console.log("status: ", status);

      let location = await Location.getCurrentPositionAsync({});
      console.log("location: ", location);
      setLocation(location);
    })();
  }, []);

  const handleNavigate = (pin) => {
    setSelectedRoute(pin)
  };

  const centerLocation = () => {
    console.log('center');
    if(location && mapRef.current){
        console.log('Ref: ', mapRef.current);
        mapRef.current.animateToRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }, 1000)
    }
  }

  const resetCompass = () => {
    if(mapRef.current){
        mapRef.current.animateCamera({heading: 0}, { duration: 1000})
    }
  }

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
          >
            {pins.map((pin, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: pin.latitude,
                  longitude: pin.longitude,
                }}
                title={pin.name}
              >
                <Callout onPress={() => handleNavigate(pin)}>
                  <View style={styles.callout}>
                    <Text style={styles.calloutTitle}>{pin.name}</Text>
                    <Text style={styles.calloutDescription}>
                      {pin.description}
                    </Text>
                    <Button title="Ir"  onPress={() => handleNavigate(pin)}/>
                  </View>
                </Callout>
              </Marker>
            ))}
            {
                selectedRoute && (
                    <MapViewDirections
                        origin={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        destination={{
                            latitude: selectedRoute.latitude,
                            longitude: selectedRoute.longitude,    
                        }}
                        apikey={APIKEY}
                        strokeWidth={4}
                        strokeColor="green"
                    />
                )
            }
          </MapView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => centerLocation()}
          >
            <Ionicons name="locate" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonCompass]} onPress={() => resetCompass()}>
            <Ionicons name="compass" size={24} color="white" />
          </TouchableOpacity>
        </>
      ) : (
        <Text>{errorMsg || "Cargando Mapa..."}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  callout: {
    width: 150,
    alignItems: "center",
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  calloutDescription: {
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    borderRadius: 30,
    padding: 10,
    elevation: 3,
  },
  buttonCompass: {
    bottom: 80,
  },
});
