
import {Dimensions} from 'react-native';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

const ciragan ={
  latitude: 41.043205458373286, 
  longitude: 29.0098958,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}

const aylak ={
  latitude: 41.04405557201334, 
  longitude: 29.004565697493568,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}

const citir ={
  latitude: 41.04803397438951, 
  longitude: 29.002270753318555 ,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 41.050258,
          longitude: 29.011065,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          }}
     >
      <Marker coordinate={citir} />
      <Marker coordinate={ciragan} />
      <Marker coordinate={aylak}/>
     </MapView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});