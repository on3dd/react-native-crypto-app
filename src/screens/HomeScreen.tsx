import React from 'react';

import { HomeScreenProps } from '../types/ScreenProps';

import DefaultWithSideDrawerLayout from '../layouts/DefaultWithSideDrawerLayout';
import CoinsContainer from '../components/home/CoinsContainer';

const HomeScreen = (props: HomeScreenProps) => {
  return <DefaultWithSideDrawerLayout component={CoinsContainer} {...props} />;
};

export default HomeScreen;
