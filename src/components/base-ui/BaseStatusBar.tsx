import React from 'react';
import { View, Platform, StatusBar, StyleSheet } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const BaseStatusBar = ({ backgroundColor = 'rgba(0,0,0,0)', ...props }) => (
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

export default BaseStatusBar;
