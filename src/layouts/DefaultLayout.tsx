import React from 'react';
import { View } from 'react-native';

import LayoutProps from '../types/LayoutProps';

import BaseHeader from '../components/base-ui/BaseHeader';
import BaseStatusBar from '../components/base-ui/BaseStatusBar';

const DefaultLayout = (props: LayoutProps) => {
  const Compoment = props.component;

  return (
    <View>
      <BaseStatusBar barStyle="light-content" />
      <BaseHeader text={props.heading} />
      <Compoment />
    </View>
  );
};

export default DefaultLayout;
