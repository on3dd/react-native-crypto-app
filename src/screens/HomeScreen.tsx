import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import CoinsContainer from '../components/home/CoinsContainer';
import ScreenProps from '../types/ScreenProps';

const HomeScreen = (props: ScreenProps) => {
  return <DefaultLayout component={CoinsContainer} {...props} />;
};

export default HomeScreen;
