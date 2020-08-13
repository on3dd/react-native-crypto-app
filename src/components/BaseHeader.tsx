import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={container}>
      <Text style={header}>Cryptocurrency App</Text>
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

export default Header;
