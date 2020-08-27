import React from 'react';

import { CoinScreenProps } from "../types/ScreenProps";

import DefaultLayout from '../layouts/DefaultLayout';
import CoinContainer from '../components/coin/CoinContainer';

const CoinScreen = (props: CoinScreenProps) => {
  return <DefaultLayout component={CoinContainer} {...props} />;
};

export default CoinScreen;
