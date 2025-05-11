import { Entypo, Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FavScreen() {
  const navigation = useNavigation();
  const data = Array.from({ length: 4 }, (_, i) => ({
    id: i.toString(),
    title: `Mục yêu thích ${i + 1}`,
    subtitle: 'https://example.com',
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

        <Text style={styles.title}>Yêu thích</Text>

        <TouchableOpacity style={styles.rightIcons} onPress={() => navigation.navigate('LibScreen')}>
          <Entypo name="dots-three-vertical" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Danh sách */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 60, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },

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
  rightIcons: {
    position: 'absolute',
    right: 16,
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
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#000",
    marginVertical:3,
    marginHorizontal:5,
  },
  textContainer: {
    flex: 1,
    left: 30,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  itemSubtitle: {
    color: '#aaa',
    fontSize: 13,
  },
});
