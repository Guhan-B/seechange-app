import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

export default function App() {
  const [isLocationSelected, setIsLoactionSelected] = useState(false);
  const [selectedLoaction, setSelectedLoaction] = useState(null);

  const mapSelectHandler = (event) => {
    if (!isLocationSelected)
      setIsLoactionSelected(true);
    setSelectedLoaction({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    })
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={mapSelectHandler}>
        {
          isLocationSelected && <Marker coordinate={selectedLoaction} />
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    padding:0
  }
});
