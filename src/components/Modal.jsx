import { Modal as RNModal, StyleSheet, Text, View } from 'react-native';

import Button from './Button';
import React from 'react';

const Modal = ({ item, actionDeleteItem, isVisible, onDismissModal }) => {
  return (
    <RNModal animationType='fade' transparent visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>{item}</Text>
          <View style={styles.actionsContainer}>
            <Button
              text='DELETE'
              customPress={() => actionDeleteItem(item)}
              buttonStyles={styles.deleteButton}
              customTextStyles={{ color: '#FFF' }}
            />
            <Button
              text='DISMISS'
              customPress={() => onDismissModal(false)}
              buttonStyles={styles.dismissButton}
            />
          </View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000007f',
  },
  modal: {
    height: '25%',
    width: '80%',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    margin: 20,
    padding: 35,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 24,
  },
  deleteButton: {
    backgroundColor: '#998da0',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  dismissButton: {
    backgroundColor: '#c4e7d4',
  },
});
