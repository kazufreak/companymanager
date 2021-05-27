import React,{Component} from 'react';
import { View, Text, ScrollView, Image, FlatList, StyleSheet, Dimensions} from 'react-native';
import { Button,Image,Divider,Tile,Text} from 'react-native-elements'
import Pagination,{Icon,Dot} from 'react-native-pagination'

//lets use faker to create mock data
let MockPersonList = new _.times(35,(i)=>{
  return {
    id:i,
    index:i,
    name:faker.name.findName(),
    avatar:faker.internet.avatar(),
    group:_.sample(["Family","Friend","Acquaintance","Other"]),
    email:faker.internet.email(),
  }
})
export default class BressGuid extends Component{
    render() {
        return(
          <View style={styles.container}>
                    
            
            <Tile
              imageSrc={require('../static/github.png')}
              style={{ width: 300, height: 100 }}
              title="スマートフォンを画像の位置に置いて下さい"
            >
             
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
     
              </View>
            </Tile>
            <Image 
              source={require('../static/github.png')}
              style={{ width: 300, height: 100 }}/>
            <Divider style={{ height:2,backgroundColor: 'black' ,margin:10}} />
    
            <Button
              raised
              backgroundColor="#ff5622"
              title='呼吸確認START'
              onPress={()=>this.props.navigation.navigate('')}
              style={styles.button}/>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
    },
    title:{
      marginTop: 30,
      marginBottom: 20,
      fontSize:25,
      fontWeight:'bold',
    },

    button: {
        margin:10
      },

  });