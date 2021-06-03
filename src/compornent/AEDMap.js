import React,{Component} from 'react';
import { View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class MapComponent extends Component {
  render() {
    return (
      <MapView 
      style={styles.mapStyle}
      initialRegion={{
        latitude: 36.28825,
        longitude: 136.7324,
        latitudeDelta: 1.0,
        longitudeDelta: 1.0,
      }}
       />
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height:  '100%',
  },
});