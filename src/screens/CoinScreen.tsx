import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import CoinContainer from '../components/coin/CoinContainer';
import ScreenProps from '../types/ScreenProps';

const CoinScreen = (props: ScreenProps) => {
  return <DefaultLayout component={CoinContainer} {...props} />;
};

export default CoinScreen;
