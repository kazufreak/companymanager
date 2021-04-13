import 'react-native-gesture-handler';
import React from 'react';// 呼び出さないと動かない
import { createStackNavigator } from '@react-navigation/stack';  
import { NavigationContainer } from '@react-navigation/native';
import Home from '../compornent/Home';
import Private from '../compornent/PrivateUser';
import Gloval from '../compornent/GlovalUser'
    
const Stack = createStackNavigator();

function PageNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="HOME" component={Home}/>
                <Stack.Screen name="Private" component={Private}/>
                <Stack.Screen name="Gloval" component={Gloval}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
  console.log(PageNavigator())

export default PageNavigator;
