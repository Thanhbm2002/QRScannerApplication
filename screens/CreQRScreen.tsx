import { Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const qrItems = [
  { key: 'clipboard', label: 'Nội dung từ khay nhớ tạm', icon: <MaterialCommunityIcons name="clipboard-text" size={20} color="#fff" /> },
  { key: 'link', label: 'Liên kết web', icon: <Ionicons name="link" size={20} color="#fff" /> },
  { key: 'text', label: 'Văn bản', icon: <Entypo name="text" size={20} color="#fff" /> },
  { key: 'contact', label: 'Liên hệ', icon: <Ionicons name="person" size={20} color="#fff" /> },
  { key: 'email', label: 'Email', icon: <Feather name="mail" size={20} color="#fff" /> },
  { key: 'sms', label: 'SMS', icon: <Entypo name="message" size={20} color="#fff" /> },
  { key: 'location', label: 'Địa lý', icon: <Entypo name="location" size={20} color="#fff" /> },
  { key: 'phone', label: 'Điện thoại', icon: <Feather name="phone" size={20} color="#fff" /> },
  { key: 'calendar', label: 'Lịch', icon: <Ionicons name="calendar" size={20} color="#fff" /> },
  { key: 'wifi', label: 'Wifi', icon: <Ionicons name="wifi" size={20} color="#fff" /> },
  { key: 'myqr', label: 'QR của tôi', icon: <Ionicons name="person" size={20} color="#fff" /> },
];

const otherItems = [
  { key: 'EAN_8', label: 'EAN_8', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'EAN_13', label: 'EAN_13', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'UPC_E', label: 'UPC_E', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'UPC_A', label: 'UPC_A', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'CODE_39', label: 'CODE_39', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'CODE_93', label: 'CODE_93', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'CODE_128', label: 'CODE_128', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'ITF', label: 'ITF', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'PDF_417', label: 'PDF_417', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'CODABAR', label: 'CODABAR', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
  { key: 'DATA_MATRIX', label: 'DATA_MATRIX', icon: <MaterialCommunityIcons name="barcode" size={20} color="#fff" /> },
];

export default function CreQRScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.item}>
      {item.icon}
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Tạo</Text>
      </View>

      {/* Body */}
      
      <ScrollView contentContainerStyle={styles.body}>
        {/* Tạo QR */}
        <Text style={styles.sectionTitle}>Tạo QR</Text>
        <FlatList
          scrollEnabled={false}
          data={qrItems}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
        />

        {/* Các loại khác */}
        <Text style={styles.sectionTitle}>Các loại khác</Text>
        <FlatList
          scrollEnabled={false}
          data={otherItems}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222' },
  header: {
    height: 56,
    backgroundColor: '#2196f3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  menuButton: {
    position: 'absolute',
    left: 16,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    paddingVertical: 12,
  },
  item: {
    backgroundColor: '#1a1a1a',
    marginHorizontal: 8,
    marginVertical: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 12,
  },
  sectionTitle: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
