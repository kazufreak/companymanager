import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import { Button,Text,  } from 'react-native-elements'

export default class UserData extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text h3>UserName: {}</Text>
                <Text h3>UserID: {}</Text>
                <Text h3>UserPass: {}</Text>
                <View >
                    <Button 
                        raised
                        type="outline"
                        title='編集'
                        
                        style={styles.button}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      
      flex:1,
      backgroundColor: '#FFFFFF',
    },
    title:{
      marginTop: 30,
      marginBottom: 20,
      fontSize:25,
      fontWeight:'bold',
    },

    button: {
        width:200,

        margin: 30
      },

  });