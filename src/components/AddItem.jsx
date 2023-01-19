import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from './Button';
import React from 'react';

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Add an item'
        style={styles.addItemInput}
        value={textValue}
        onChangeText={onChange}
      />
      <Button
        text='ADD'
        customPress={onAddItem}
        buttonStyles={styles.addItemButton}
      />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  addItemInput: {
    borderColor: '#63585e',
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#fff',
  },
  addItemButton: {
    backgroundColor: '#c4e7d4',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});
