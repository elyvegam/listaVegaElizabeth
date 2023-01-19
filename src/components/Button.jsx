import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

const Button = ({ text, buttonStyles, customPress, customTextStyles }) => {
  return (
    <TouchableOpacity
      onPress={customPress}
      style={{ ...styles.buttons, ...buttonStyles }}
    >
      <Text style={{ ...styles.text, ...customTextStyles }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttons: {
    minHeight: 20,
    minWidth: 100,
    padding: 10,
    alignItems: 'center',
    margin: 2,
  },
  text: {
    color: '#000',
  },
});
