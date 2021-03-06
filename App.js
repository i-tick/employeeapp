import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Home from './screens/home'
import CreateEmployee from './screens/CreateEmployee'

export default function App() {
  return (
    <View style={styles.container}>
      <CreateEmployee/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginTop: Constants.statusBarHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
