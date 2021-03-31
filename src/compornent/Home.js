import React,{Component} from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';


export class Home extends Component{

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.title}>
              <Text>CompanyManager</Text>
            </View>
            <View style={styles.buttonContiner}>
              <Button titlw={"PrivateUser"}></Button>
            </View>
            <Text style={{marginTop: 100}}>My name is {this.props.name}.</Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)
