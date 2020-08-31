import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import IconProps from '../../types/IconProps';

const BaseIcon = (props: IconProps) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={icon}>
      <FontAwesome5 name={props.icon || 'question'} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    padding: 5,
    marginRight: 5,
  },
});

const { icon } = styles;

export default BaseIcon;
