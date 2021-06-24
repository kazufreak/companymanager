import React,{Component} from 'react';
import { View, StyleSheet} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';



export default class MapComponent extends Component {
  render() {
    return (
      <View>
        <MapView 
          style={styles.mapStyle}
          initialRegion={{
          latitude: 36.234057,
          longitude: 138.465578,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
         }}/>
        <Marker
          coordinate={{latitude:36.234057,longitude:138.465578}}
          title="test"
          description="ttt"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height:  '100%',
  },
});