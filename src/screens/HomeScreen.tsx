import React from 'react';

import { HomeScreenProps } from "../types/ScreenProps";

import DefaultLayout from '../layouts/DefaultLayout';
import CoinsContainer from '../components/home/CoinsContainer';


const HomeScreen = (props: HomeScreenProps) => {
  return <DefaultLayout component={CoinsContainer} {...props} />;
};

export default HomeScreen;
