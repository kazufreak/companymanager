import React,{Component} from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';

export default class Gloval extends Component{
    render() {
        return(
            <View>
                <Button title="Userlist"></Button>
                <Button title="予定情報"></Button>
            </View>
        )
    }
}