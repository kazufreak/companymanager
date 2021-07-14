import React,{Component} from 'react';
import { View, ScrollView, FlatList,TouchableOpacity, StyleSheet, Text} from 'react-native';
import { Button,Divider,Tile,Image} from 'react-native-elements'
import Sensor from '../logic/sensor';



export default class BressCheck extends Component{
    render() {
        return(
          <View style={styles.container}>
              <Sensor></Sensor>
        
            <View style={styles.buttonContainer}>
            </View>    
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#FFFFFF',
      //justifyContent: 'center',
    },
    title:{
      marginTop: 30,
      marginBottom: 20,
      fontSize:25,
      fontWeight:'bold',
    },

    button: {
      backgroundColor:"#FAAC58",
      height:50,
      margin: 20
    },

  });