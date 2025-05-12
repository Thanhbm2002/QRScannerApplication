import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigator } from './routes';
0




export default class App extends Component {
  render(){
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
      </SafeAreaView>
    );
  }
  
}
