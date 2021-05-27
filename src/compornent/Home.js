import React,{Component} from 'react';
import {Text, View,TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

export default class Home extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>AED Helper</Text>
                <View >
                    <Button
                        raised
                        type="outline"
                        icon={{name: 'pulse', type: 'octicon'}}
                        title='呼吸確認'
                        onPress={()=>this.props.navigation.navigate('BressGuid')}
                        style={styles.button}/>
                    <Button
                        raised
                        type="outline"
                        icon={{name: 'globe', type: 'octicon'}}
                        title='近くのAED'
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
        color:"red",
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