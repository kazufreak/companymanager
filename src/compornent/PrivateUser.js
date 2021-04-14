import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements'

export default class Private extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Button
                        raised
                        type="outline"
                        icon={{name: 'person', type: 'octicon'}}
                        title='User管理'
                        onPress={()=>this.props.navigation.navigate('User')}
                        style={styles.button}/>
                <Button
                        raised
                        type="outline"
                        icon={{name: 'repo-push', type: 'octicon'}}
                        title='予定追加'
                        onPress={()=>this.props.navigation.navigate('')}
                        style={styles.button}/>
       
                <Button
                        raised
                        type="outline"
                        icon={{name: 'heart', type: 'octicon'}}
                        title='状態管理'
                        onPress={()=>this.props.navigation.navigate('')}
                        style={styles.button}/>
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