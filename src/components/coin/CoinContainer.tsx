import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { useFetchingWithConditionAndArgs } from '../../utils/hooks';
import fetchCoin from '../../actions/fetchCoin';
import { CoinContainerProps } from '../../types/ContainerProps';
import RootState from '../../types/RootState';

import BaseSpinner from '../base-ui/BaseSpinner';
import CoinProfile from './CoinProfile';

const CoinContainer = ({ route }: CoinContainerProps) => {
  const coin = useSelector((state: RootState) => state.coin);
  const condition = !coin.data || coin.data.id !== route.params.id;

  useFetchingWithConditionAndArgs(fetchCoin, condition, route.params.id);

  const renderView = () => {
    return coin.isFetching || condition ? renderSpinner() : renderProfile();
  };

  const renderSpinner = () => {
    return <BaseSpinner visible={coin.isFetching} />;
  };

  const renderProfile = () => {
    return <CoinProfile data={coin.data} />;
  };

  return <View style={view}>{renderView()}</View>;
};

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
  },
});

const { view } = styles;

export default CoinContainer;
