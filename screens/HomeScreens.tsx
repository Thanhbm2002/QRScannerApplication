import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [permission, requestPermission] = useCameraPermissions();

  const [flash, setFlash] = useState(false);
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [zoom, setZoom] = useState(0);

  if (!permission?.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Ứng dụng cần quyền truy cập camera.</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.requestButton}>Cấp quyền</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Camera View */}
      <CameraView
        style={StyleSheet.absoluteFill}
        facing={facing}
        enableTorch={flash}
        zoom={zoom}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('LibScreen')}>
            <Ionicons name="image-outline" size={28} color="#fff" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFlash(!flash)}>
            <MaterialCommunityIcons
              name="flash"
              size={26}
              color={flash ? '#FFD700' : '#fff'}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFacing(facing === 'back' ? 'front' : 'back')}>
            <MaterialCommunityIcons
              name="camera-flip"
              size={26}
              color="#fff"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Overlay */}
      <View style={styles.overlay}>
        <View style={styles.focusFrame} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <MaterialIcons name="zoom-out" size={28} color="#fff" style={{ marginRight: 12 }} />
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={zoom}
          onValueChange={setZoom}
          minimumTrackTintColor="#fff"
          maximumTrackTintColor="#fff"
          thumbTintColor="#fff"
        />
        <MaterialIcons name="zoom-in" size={28} color="#fff" style={{ marginLeft: 12 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },

  cameraContainer: { flex: 1, position: 'relative' },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  menuButton: {
    position: 'absolute',
    left: 10,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  headerIcon: {
    marginHorizontal: 8,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusFrame: {
    width: 280,
    height: 280,
    borderColor: '#2196f3',
    borderWidth: 1,
    
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  slider: {
    width: '60%',
    height: 40,
  },

  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  permissionText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
  },
  requestButton: {
    color: '#00f',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
