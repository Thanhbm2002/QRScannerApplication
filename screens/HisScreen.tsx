import HistoryFilter from '@/components/HistoryFilter';
import ModalMenu from '@/components/modal';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HisScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);

  const data = Array.from({ length: 5 }, (_, i) => ({
    id: i.toString(),
    title: `Văn bản ${i + 1}`,
    info: '12/34/5678 00:00:0000',
  }));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Lịch sử</Text>

        <View style={styles.rightGroup}>
          <TouchableOpacity style={styles.iconButton} onPress={() => setToggleFilter(prev => !prev)}>
            <Feather name="filter" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => setModalVisible(true)}>
            <Entypo name="dots-three-vertical" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ModalMenu visible={modalVisible} onClose={() => setModalVisible(false)} />

      {/* Slide Filter */}
      <HistoryFilter visible={toggleFilter} onClose={() => setToggleFilter(false)} />

      {/* Body */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 60, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Ionicons name="link" size={24} color="#00bcd4" />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemInfo}>{item.info}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222' },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    zIndex: 10,
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
    gap: 12,
  },
  iconButton: {
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#141414",
    marginVertical: 3,
    marginHorizontal: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  itemInfo: {
    color: '#aaa',
    fontSize: 13,
  },
});
