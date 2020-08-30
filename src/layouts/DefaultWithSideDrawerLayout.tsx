import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu-updated';

import LayoutProps from '../types/LayoutProps';
import styles from '../styles/layouts/DefaultWithSideDrawerLayoutStyles';

import DefaultLayout from './DefaultLayout';
import BaseSideDrawerMenu from '../components/base-ui/BaseSideDrawerMenu';

const Menu = () => (
  <View style={menuContainer}>
    <View style={header}>
      <Text style={text}>Settings</Text>
    </View>
    <View style={body}>
      <Text>I'm nigger</Text>
    </View>
  </View>
);

const DefaultWithSideDrawerLayout = (props: LayoutProps) => {
  const [isVisible, isVisibleChange] = useState(false);
  const menu = <BaseSideDrawerMenu component={Menu} isVisible={isVisible} />;

  return (
    <View style={container}>
      <SideMenu menu={menu} isOpen={isVisible}>
        <DefaultLayout icon="bars" {...props} />
      </SideMenu>
    </View>
  );
};

const { container, menuContainer, header, text, body } = styles;

export default DefaultWithSideDrawerLayout;
