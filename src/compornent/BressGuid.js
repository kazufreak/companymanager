import React,{Component} from 'react';
import { View, ScrollView, FlatList, StyleSheet, Dimensions} from 'react-native';
import { Button,Divider,Tile,Image,Text} from 'react-native-elements'

export default class BressGuid extends Component{
    render() {
        return(
          <View style={styles.container}>
            <Tile
              imageSrc={require('../static/2.png')}
              imageProps={{resizeMode:'contain'}}
              
              title="スマートフォンを画像の位置に置いて下さい"
            >
             
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
     
              </View>
            </Tile>
         
            <Divider style={{ height:3,backgroundColor: 'green' ,margin:10}} />
    
            <Button
              title='呼吸確認START'
              onPress={()=>this.props.navigation.navigate('BressCheck')}
              buttonStyle={styles.button}
              titleStyle={{fontFamily:"sans-serif",fontSize:25}}/>
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
      height:70,
      margin: 10
    },

  });