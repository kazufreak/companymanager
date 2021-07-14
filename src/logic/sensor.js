import React,{Component} from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { abs } from 'react-native-reanimated';


export default class Sensor extends Component {
    constructor() {
      super();
      // state初期化
      this.state = {
        span:32,
        accelerometerData: {},//加速度取得データ
        hantext:"",//呼吸有無リアルタイム計測
        timer:0,
      };
      
    }
  
    componentDidMount() {
      this._toggle();
    }
  
    componentWillUnmount() {
      this._unsubscribe();
    }
  
    _toggle = () => {
      if (this._subscription) {
        this._unsubscribe();
      } else {
        this._subscribe();
        
      }
    }
  
    // 加速度センシングを開始する
    _subscribe = () => {
      this._subscription = Accelerometer.addListener(accelerometerData => {
        // 加速度を取得
        this.setState({ accelerometerData });
        //console.log(typeof(accelerometerData.x))
        this.setState({hantext : jageText(accelerometerData.x,accelerometerData.y)});
        this._timer();
        
      });
      // 1秒ごとに加速度を測定
      Accelerometer.setUpdateInterval(this.state.span);
    }
  
    // 加速度センシングを終了する
    _unsubscribe = () => {
      if (this._subscription) {
        this._subscription.remove();
      }
      this._subscription = null;
    };
    _timer(){
      if(this.state.hantext == "呼吸無"){
          this.setState({timer : this.state.timer+this.state.span});
      }else{
        this.setState({timer : 0})
      }
    }
    kokyuuCom = ()=>{
      let res= "";
        if(hate=="呼吸無"){
          res = "<Text style={styles.kokyuu0}>判定 : {hate}>"
        }else{
          res = "<Text style={styles.kokyuu1}>判定 : {hate}>"
        }
        return res;
    }
    
  //
    render() {
      let { x, y, z } = this.state.accelerometerData;
      let hate = this.state.hantext;
      let count = this.state.timer;
      let hateCom = this.kokyuuCom;
      return (
        <View style={styles.container}>
          <Text style={styles.kokyuu1}>判定 : {hate}</Text>
          <Text>count : {count}</Text>
          <Text>x : {x}</Text>
          <Text>y : {y}</Text>
          <Text>z : {z}</Text>
        </View>
      );
    }
  }

  //呼吸のあるなし判定関数
  function jageText(x,y){
    let bresstype =["呼吸無","呼吸有"]
      let flag = 0.1;
      let res = "";
      if(Math.abs(x) > flag || Math.abs(y) > flag){
          res = bresstype[1];
        }else{
          res = bresstype[0];
        }
      return res;
  };
    

  
  function checksum(x,y,z){
    bresstype =["呼吸無","呼吸有"]
    flag = 0.2
    res = 0;
    if(abs(x) >= flag || abs(y) >= flag){
      res = 1;
      }else{
        res = 0;
      }
      return bresstype[res];
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    kokyuu0:{
      fontSize:25,
      color:'red',
      margin:20,
    },
    kokyuu1:{
      fontSize:25,
      color:'green',
      margin:20,
    }
  });