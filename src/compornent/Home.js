import React,{Component} from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';


export default class Home extends Component{
    render() {
        return (
          <View>
            <View style={styles.title}>
              <Text>CompanyManager</Text>
            </View>
            <View style={styles.buttonContiner}>
              <Button onPress={()=>this.props.navigation.navigate('呼吸確認')}>PrivateUser</Button>
            </View>
            <Text style={{marginTop: 100}}>My name is</Text>
          </View>
        )
      }
    }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1,
  },
  title:{
    marginTop: 50,
    flex:0.3,
  },
  buttonContiner:{
    flexDirection: 'column',
    flex:0.5,

  },
  button:{
    marginBottom:0,
  }
});


