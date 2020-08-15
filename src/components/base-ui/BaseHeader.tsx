import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HeaderProps = {
  text?: string;
};

const BaseHeader = ({ text = 'Cryptocurrency App' }) => {
  return (
    <View style={container}>
      <Text style={header}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginVertical: 25,
    alignItems: 'center',
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const { container, header } = styles;

export default BaseHeader;
