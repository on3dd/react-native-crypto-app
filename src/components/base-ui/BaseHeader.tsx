import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type HeaderProps = {
  text?: string;
  icon?: string;
};

const BaseHeader = (props: HeaderProps) => {
  return (
    <View style={container}>
      {props.icon && <FontAwesome5 style={icon} name={props.icon} />}
      <Text style={header}>{props.text || 'Cryptocurrency app'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    zIndex: 100,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    marginRight: 10,
  },
});

const { container, header, icon } = styles;

export default BaseHeader;
