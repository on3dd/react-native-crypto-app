import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { useFetching } from '../utils/hooks';
import fetchCoinData from '../actions/fetchCoinData';
import RootState from '../types/RootState';

import CoinCard from './CoinCard';

const CryptoContainer = () => {
  const crypto = useSelector((state: RootState) => state.crypto);

  useFetching(fetchCoinData);

  const renderView = () => {
    if (crypto.isFetching) {
      return renderSpinner();
    }

    return renderList();
  };

  const renderSpinner = () => {
    return (
      <Spinner
        visible={crypto.isFetching}
        textContent={'Loading'}
        textStyle={{ color: '#253145' }}
        animation="fade"
      />
    );
  };

  const renderList = () => {
    return (
      <FlatList
        data={crypto.data}
        contentContainerStyle={container}
        renderItem={({ item }) => (
          <CoinCard
            image={item.image}
            name={item.name}
            symbol={item.symbol}
            current_price={item.current_price}
            price_change_24h={item.price_change_24h}
            price_change_percentage_24h={item.price_change_percentage_24h}
          />
        )}
        initialNumToRender={10}
      ></FlatList>
    );
  };

  return <View style={view}>{renderView()}</View>;
};

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
  },

  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
});

const { view, container } = styles;

export default CryptoContainer;
