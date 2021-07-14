import React,{Component} from 'react';
import {Text, View,TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

export default class Home extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>AED Helper</Text>
                
                <Button
                    //raised
                    type="outline"
                    icon={{name: 'pulse', type: 'octicon'}}
                    title='呼吸確認'
                    onPress={()=>this.props.navigation.navigate('BressGuid')}
                    buttonStyle={styles.button}
                    titleStyle={{fontFamily:"sans-serif",fontSize:25}}/>
                <Button
                    //raised
                    type="outline"
                    icon={{name: 'globe', type: 'octicon'}}
                    title='近くのAED'
                    onPress={()=>this.props.navigation.navigate('MapComponent')}
                    buttonStyle={styles.button}
                    titleStyle={{fontFamily:"sans-serif",fontSize:25}}/>
                <Button
                    //raised
                    type="outline"
                    icon={{name: 'globe', type: 'octicon'}}
                    title='AEDの使い方'
                    onPress={()=>this.props.navigation.navigate('UseAED')}
                    buttonStyle={styles.button}
                    titleStyle={{fontFamily:"sans-serif",fontSize:25}}/>
               
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    title:{
        textAlign: 'center',
        color:"red",
        marginTop: 30,
        marginBottom: 20,
        fontSize:30,
        fontWeight:'bold',
    },

    button: {
        margin: 20,
      },

  });