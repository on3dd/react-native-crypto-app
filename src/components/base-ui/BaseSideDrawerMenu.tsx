import React, { ElementType } from 'react';
import { View, StyleSheet } from 'react-native';

import { STATUSBAR_HEIGHT } from '../../utils/constants';

type BaseSideDrawerMenu = {
  component: ElementType;
  isVisible: boolean;
};

const BaseSideDrawerMenu = ({
  component: Component,
  ...props
}: BaseSideDrawerMenu) => {
  return (
    <View style={view}>
      <Component {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

const { view } = styles;

export default BaseSideDrawerMenu;
