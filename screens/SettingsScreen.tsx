import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const colorPalette = [
  '#2196f3', '#f44336', '#ff9800', '#ffeb3b', '#4caf50',
  '#43a047', '#03a9f4', '#3f51b5', '#7986cb', '#9c27b0',
  '#ef9a9a', '#90caf9',
];

const settingOptions = [
  { key: 'theme', label: 'Chủ đề', subLabel: 'Mặc định hệ thống' },
  { key: 'beep', label: 'Bíp' },
  { key: 'vibrate', label: 'Rung' },
  { key: 'clipboard', label: 'Sao chép vào bảng tạm' },
  { key: 'urlInfo', label: 'Thông tin URL', subLabel: 'Cố gắng truy xuất thêm thông tin về URL' },
  { key: 'multiScan', label: 'Chế độ quét hàng loạt', subLabel: 'Thêm tuỳ chọn để quét hàng loạt vào màn hình quét' },
  { key: 'autoFocus', label: 'Sử dụng lấy nét tự động' },
  { key: 'touchFocus', label: 'Chạm lấy nét', subLabel: 'Chỉ khả dụng khi bật tuỳ chọn tự động lấy nét.' },
  { key: 'keepDuplicate', label: 'Giữ các Trùng lặp' },
  { key: 'customAction', label: 'Hành động tuỳ chỉnh', subLabel: 'Thêm tuỳ chọn để liên kết đến URL của riêng bạn' },
  { key: 'inAppBrowser', label: 'Sử dụng trình duyệt trong ứng dụng' },
  { key: 'addToHistory', label: 'Thêm bản quét vào lịch sử' },
  { key: 'autoOpenUrl', label: 'Tự động mở các URL', subLabel: 'Tự động mở trang web sau khi quét QR bằng URL' },
  { key: 'camera', label: 'Máy ảnh', subLabel: 'Máy ảnh 1 - khuyến nghị' },
  { key: 'searchTool', label: 'Các công cụ tìm kiếm', subLabel: 'Thiết bị mặc định' },
  { key: 'region', label: 'Tìm kiếm quốc gia' },
];

export default function SettingScreen() {
  const navigation = useNavigation();
  const [selectedColor, setSelectedColor] = useState('#2196f3');
  const [toggles, setToggles] = useState<{ [key: string]: boolean }>({
    urlInfo: true,
    autoFocus: true,
    touchFocus: true,
    keepDuplicate: true,
    customAction: true,
    inAppBrowser: true,
    addToHistory: true,
    autoOpenUrl: false,
    beep: false,
    vibrate: false,
    clipboard: false,
    multiScan: false,
  });

  const handleToggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
        <Text style={styles.title}>Cài đặt</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        {/* Color palette */}
        <Text style={styles.sectionLabel}>Bảng màu</Text>
        <View style={styles.palette}>
          {colorPalette.map((color) => (
            <TouchableOpacity
              key={color}
              style={[styles.colorBox, { backgroundColor: color }]}
              onPress={() => setSelectedColor(color)}
            >
              {selectedColor === color && (
                <Ionicons name="checkmark" size={20} color="#fff" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings list */}
        {settingOptions.map(({ key, label, subLabel }) => (
          <View key={key} style={styles.settingItem}>
            <View style={styles.labelBox}>
              <Text style={styles.settingLabel}>{label}</Text>
              {subLabel && <Text style={styles.settingSubLabel}>{subLabel}</Text>}
            </View>
            {toggles.hasOwnProperty(key) && (
              <TouchableOpacity onPress={() => handleToggle(key)}>
                <MaterialCommunityIcons  name={toggles[key] ? 'checkbox-blank-outline' : 'checkbox-marked'}
                  size={24}
                  color="#2196f3" />
              </TouchableOpacity>
            )}
          </View>
        ))}
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
    padding: 16,
  },
  sectionLabel: {
    color: '#ccc',
    fontSize: 20,
    marginBottom: 8,
  },
  palette: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  colorBox: {
    width: 54,
    height: 54,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  labelBox: {
    flexShrink: 1,
    paddingRight: 10,
  },
  settingLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  settingSubLabel: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
  },
});
