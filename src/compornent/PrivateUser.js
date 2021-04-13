import React,{Component} from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';

export default class Private extends Component{
    render() {
        return(
            <View>
                <Button title="User管理"></Button>
                <Button title="予定追加"></Button>
                <Button title="状態管理"></Button>
            </View>
        )
    }
}
