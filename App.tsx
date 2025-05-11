import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigator } from './routes';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </SafeAreaView>
  );
}
