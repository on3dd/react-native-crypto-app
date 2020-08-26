import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HeaderProps = {
  text?: string;
};

const BaseHeader = ({ text = 'Cryptocurrency App' }: HeaderProps) => {
  return (
    <View style={container}>
      <Text style={header}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingVertical: 25,
    paddingHorizontal: 0,
    alignItems: 'center',
    zIndex: 100,
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const { container, header } = styles;

export default BaseHeader;
