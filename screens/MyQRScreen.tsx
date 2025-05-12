import { Feather, Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function MyQRScreen() {
  const navigation = useNavigation();

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

        <View style={styles.rightGroup}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="check" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.box}>
          <View style={styles.row}>
            <Ionicons name="person" size={18} color="#fff" />
            <Text style={styles.boxTitle}>  QR của tôi</Text>
          </View>
          <Text style={styles.boxDesc}>Chia sẻ thông tin liên lạc của bạn qua QR</Text>
          <Text style={styles.boxHint}>
            Chỉ nhập dữ liệu bạn muốn chia sẻ. Khi hoàn tất, nhấp vào ✓. NÊN Lần tới khi bạn mở QR của tôi, QR liên hệ của bạn sẽ được hiển thị.
          </Text>
        </View>

        <View style={styles.form}>
          {['Họ và tên', 'Cơ quan', 'Địa chỉ', 'Điện thoại', 'Email'].map((placeholder, i) => (
            <TextInput
              key={i}
              placeholder={placeholder}
              placeholderTextColor="#aaa"
              style={styles.input}
            />
          ))}
          <TextInput
            placeholder="Ghi chú"
            placeholderTextColor="#aaa"
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            multiline
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  header: {
    height: 56,
    backgroundColor: '#2196f3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  menuButton: {
    position: 'absolute',
    left: 16,
  },
  rightGroup: {
    position: 'absolute',
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    marginLeft: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    padding: 16,
  },
  box: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  boxTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  boxDesc: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  boxHint: {
    color: '#ccc',
    fontSize: 13,
  },
  form: {
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#fff',
  },
});
