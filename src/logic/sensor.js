import React,{Component} from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default class Sensor extends Component {
    constructor() {
      super();
      // state初期化
      this.state = {
        accelerometerData: {}
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
      });
      // 1秒ごとに加速度を測定
      Accelerometer.setUpdateInterval(1000);
    }
  
    // 加速度センシングを終了する
    _unsubscribe = () => {
      if (this._subscription) {
        this._subscription.remove();
      }
      this._subscription = null;
    }
  
    render() {
      let { x, y, z } = this.state.accelerometerData;
      return (
        <View style={styles.container}>
          <Text>x : {x}</Text>
          <Text>y : {y}</Text>
          <Text>z : {z}</Text>
        </View>
      );
    }
  }

  //呼吸のあるなし判定関数
  function jaghe(){
      
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });