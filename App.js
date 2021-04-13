import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PageNavigator from './src/navigater/AppNavigater';

export default function App() {
  return (
     <PageNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
