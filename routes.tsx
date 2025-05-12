import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import AboutScreen from './screens/AboutScreen';
import CreQRScreen from './screens/CreQRScreen';
import FavScreen from './screens/FavScreen';
import HisScreen from './screens/HisScreen';
import HomeScreen from './screens/HomeScreens';
import LibScreen from './screens/LibScreen';
import MyQRScreen from './screens/MyQRScreen';
import RmvAdScreen from './screens/RmvAdScreen';
import SettingsScreen from './screens/SettingsScreen';
import ShareScreen from './screens/ShareScreen';

export type RootDrawerParamList = {
  HomeScreen: undefined;
  LibScreen: undefined;
  FavScreen: undefined;
  HisScreen: undefined;
  MyQRScreen: undefined;
  CreQRScreen: undefined;
  SettingsScreen: undefined;
  ShareScreen: undefined;
  AboutScreen: undefined;
  RmvAdScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen"  
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#222',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: '55%',
      },
      drawerContentContainerStyle: {
        margin:0,
        padding:0,
        width: 900,
        right: 20,
        bottom:15,
      },
      drawerActiveBackgroundColor: '#333',
      drawerActiveTintColor: '#2196f3',
      drawerInactiveTintColor: '#fff',
      drawerItemStyle: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#333', 
        flex:1,
        width:'100%',
      },
      drawerLabelStyle: {
        marginLeft: 5, 
        fontSize: 14,
        
      },
      drawerIcon: ({ focused }) => (
        <MaterialCommunityIcons
          name="scan-helper"
          size={20}
          color={focused ? '#2196f3' : '#fff'}
        />
      ),
    }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Quét'  }} />
      <Drawer.Screen name="LibScreen" component={LibScreen} options={{ title: 'Quét hình ảnh' }} />
      <Drawer.Screen name="FavScreen" component={FavScreen} options={{ title: 'Yêu thích' }} />
      <Drawer.Screen name="HisScreen" component={HisScreen} options={{ title: 'Lịch sử' }} />
      <Drawer.Screen name="MyQRScreen" component={MyQRScreen} options={{ title: 'QR của tôi' }} />
      <Drawer.Screen name="CreQRScreen" component={CreQRScreen} options={{ title: 'Tạo QR' }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Cài đặt' }} />
      <Drawer.Screen name="ShareScreen" component={ShareScreen} options={{ title: 'Chia sẻ' }} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} options={{ title: 'About us' }} />
      <Drawer.Screen name="RmvAdScreen" component={RmvAdScreen} options={{ title: 'Remove ads' }} />
    </Drawer.Navigator>
  );
} 
