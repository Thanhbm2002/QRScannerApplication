import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Linking } from 'react-native';
import CreQRScreen from './screens/CreQRScreen';
import FavScreen from './screens/FavScreen';
import HisScreen from './screens/HisScreen';
import HomeScreen from './screens/HomeScreens';
import LibScreen from './screens/LibScreen';
import MyQRScreen from './screens/MyQRScreen';
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
    }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Quét',
          drawerIcon: ({ color }) => <MaterialCommunityIcons name="scan-helper" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="LibScreen"
        component={LibScreen}
        options={{
          title: 'Quét hình ảnh',
          drawerIcon: ({ color }) => <MaterialIcons name="photo-library" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="FavScreen"
        component={FavScreen}
        options={{
          title: 'Yêu thích',
          drawerIcon: ({ color }) => <Ionicons name="star-outline" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="HisScreen"
        component={HisScreen}
        options={{
          title: 'Lịch sử',
          drawerIcon: ({ color }) => <MaterialIcons name="history" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="MyQRScreen"
        component={MyQRScreen}
        options={{
          title: 'QR của tôi',
          drawerIcon: ({ color }) => <Ionicons name="person-outline" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="CreQRScreen"
        component={CreQRScreen}
        options={{
          title: 'Tạo QR',
          drawerIcon: ({ color }) => <MaterialCommunityIcons name="pencil-outline" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Cài đặt',
          drawerIcon: ({ color }) => <Ionicons name="settings-outline" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="ShareScreen"
        component={ShareScreen}
        options={{
          title: 'Chia sẻ',
          drawerIcon: ({ color }) => <Feather name="share-2" size={20} color={color} />,
        }}
      />
      <Drawer.Screen
        name="AboutScreen"
        options={{
          title: 'Ứng dụng của chúng tôi',
          drawerIcon: ({ color }) => (
            <Feather name="info" size={20} color={color} />
          ),
        }}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault(); 
            Linking.openURL('https://play.google.com/store/apps/dev?id=7739323866949324662&hl=vi&pli=1');
          },
        }}
      >
        {() => null}
      </Drawer.Screen>

      

      <Drawer.Screen
        name="RmvAdScreen"
        options={{
          title: 'Loại bỏ quảng cáo',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="advertisements-off" size={24} color={color} />
          ),
        }}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault(); 
            Linking.openURL('https://play.google.com/store/apps/details?id=com.gamma.scan2&hl=vi');
          },
        }}
      >
        {() => null}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}