import { Entypo, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const filterList = [
  { key: 'link', label: 'Liên kết web', icon: <Ionicons name="link" size={20} color="#fff" /> },
  { key: 'text', label: 'Văn bản', icon: <Entypo name="text" size={20} color="#fff" /> },
  { key: 'wifi', label: 'Wifi', icon: <Ionicons name="wifi" size={20} color="#fff" /> },
  { key: 'product', label: 'Sản phẩm', icon: <MaterialIcons name="inventory" size={20} color="#fff" /> },
  { key: 'barcode', label: 'Mã vạch', icon: <MaterialIcons name="qr-code-scanner" size={20} color="#fff" /> },
  { key: 'phone', label: 'Điện thoại', icon: <Feather name="phone" size={20} color="#fff" /> },
  { key: 'contact', label: 'Liên hệ', icon: <Ionicons name="person" size={20} color="#fff" /> },
  { key: 'isbn', label: 'ISBN', icon: <FontAwesome name="book" size={20} color="#fff" /> },
  { key: 'email', label: 'Email', icon: <Feather name="mail" size={20} color="#fff" /> },
  { key: 'sms', label: 'SMS', icon: <Entypo name="message" size={20} color="#fff" /> },
  { key: 'location', label: 'Địa lý', icon: <Entypo name="location" size={20} color="#fff" /> },
  { key: 'calendar', label: 'Lịch', icon: <Ionicons name="calendar" size={20} color="#fff" /> },
];

export default function HistoryFilter({ visible, onClose }: { visible: boolean; onClose: () => void }) {
    const translateX = React.useRef(new Animated.Value(500)).current;
    const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set());
  
    React.useEffect(() => {
      Animated.timing(translateX, {
        toValue: visible ? 0 : 500,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }, [visible]);
  
    const toggleKey = (key: string) => {
      setSelectedKeys(prev => {
        const newSet = new Set(prev);
        if (newSet.has(key)) {
          newSet.delete(key);
        } else {
          newSet.add(key);
        }
        return newSet;
      });
    };
  
    return (
      <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
       
          {filterList.map(({ key, label, icon }) => {
            const isSelected = selectedKeys.has(key);
            return (
              <TouchableOpacity key={key} onPress={() => toggleKey(key)}>
                <View style={[
                  styles.item,
                  { backgroundColor: isSelected ? '#222' : 'transparent' },
                ]}>
                  {React.cloneElement(icon, { color: isSelected ? '#2196f3' : '#fff' })}
                  <Text style={[styles.label, { color: isSelected ? '#2196f3' : '#fff' }]}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        
      </Animated.View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 56,
    bottom: 0,
    right: 0,
    width: '50%',
    backgroundColor: '#333',
    zIndex: 20,
    elevation: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#171717",
    paddingLeft: 16,
  },
  label: {
    fontSize: 16,
    color: '#fff',
  },
});
