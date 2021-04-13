import React,{Component} from 'react';
import {Text, View,TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

export default class Home extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>CompanyTool</Text>
                <View >
                    <Button
                        raised
                        type="outline"
                        icon={{name: 'hubot', type: 'octicon'}}
                        title='Private User'
                        onPress={()=>this.props.navigation.navigate('Private')}
                        style={styles.button}/>
                    <Button
                        raised
                        type="outline"
                        icon={{name: 'globe', type: 'octicon'}}
                        title='Gloval User'
                        onPress={()=>this.props.navigation.navigate('Gloval')}
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