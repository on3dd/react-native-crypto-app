import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { STATUSBAR_HEIGHT } from '../../utils/constants';

const BaseStatusBarColor = ({
  backgroundColor = 'rgba(0,0,0,0)',
  ...props
}) => (
  <View style={[statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

const { statusBar } = styles;

export default BaseStatusBarColor;
