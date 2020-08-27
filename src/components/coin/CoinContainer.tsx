import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { useFetchingWithConditionAndArgs } from '../../utils/hooks';
import fetchCoin from '../../actions/fetchCoin';
import ContainerProps from '../../types/ContainerProps';
import RootState from '../../types/RootState';

import CoinProfile from './CoinProfile';

const CoinContainer = ({ route }: ContainerProps) => {
  const coin = useSelector((state: RootState) => state.coin);
  const condition = !coin.data || coin.data.id !== route.params.id;

  useFetchingWithConditionAndArgs(fetchCoin, condition, route.params.id);

  const renderView = () => {
    return coin.isFetching || condition ? renderSpinner() : renderProfile();
  };

  const renderSpinner = () => {
    return (
      <Spinner
        visible={coin.isFetching}
        textContent={'Loading'}
        textStyle={{ color: '#253145' }}
        animation="fade"
      />
    );
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
