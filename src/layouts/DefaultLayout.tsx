import React from 'react';
import { View } from 'react-native';

import LayoutProps from '../types/LayoutProps';
import styles from '../styles/layouts/DefaultLayoutStyles';

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

const { layout, topBar, container } = styles;

export default DefaultLayout;
