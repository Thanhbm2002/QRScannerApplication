import { Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

interface ModalMenuProps {
  visible: boolean;
  onClose: () => void;
}

export default function ModalMenu({ visible, onClose }: ModalMenuProps) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalIcon}>
            <Feather name="trash" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalIcon}>
            <MaterialIcons name="upload" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalIcon}>
            <MaterialIcons name="file-download" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalIcon}>
            <MaterialIcons name="upload" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 56,
    paddingRight: 16,
  },
  modalContainer: {
    backgroundColor: '#555',
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation: 2,
  },
  modalIcon: {
    paddingVertical: 10,
    alignItems: 'center',
  },
});
