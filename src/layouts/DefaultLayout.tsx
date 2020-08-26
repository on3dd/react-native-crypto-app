import React from 'react';
import { View, StyleSheet } from 'react-native';

import LayoutProps from '../types/LayoutProps';

import BaseHeader from '../components/base-ui/BaseHeader';
import BaseStatusBar from '../components/base-ui/BaseStatusBar';

const DefaultLayout = (props: LayoutProps) => {
  const { component: Component, heading, ...navigation } = props;
  return (
    <View style={layout}>
      <View style={topBar}>
        <BaseStatusBar barStyle="light-content" />
        <BaseHeader text={props.heading} />
      </View>

      <View style={container}>
        <Component {...navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexGrow: 1,
  },
  topBar: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
  },
});

const { layout, topBar, container } = styles;

export default DefaultLayout;
