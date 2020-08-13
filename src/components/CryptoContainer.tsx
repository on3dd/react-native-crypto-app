import React from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
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
      <View>
        <Spinner
          visible={crypto.isFetching}
          textContent={'Loading'}
          textStyle={{ color: '#253145' }}
          animation="fade"
        />
      </View>
    );
  };

  const renderList = () => {
    return (
      <ScrollView contentContainerStyle={container}>
        {crypto.data.map((el, idx) => (
          <CoinCard
            key={idx}
            image={el.image}
            name={el.name}
            symbol={el.symbol}
            current_price={el.current_price}
            price_change_24h={el.price_change_24h}
            price_change_percentage_24h={el.price_change_percentage_24h}
          />
        ))}
      </ScrollView>
    );
  };

  return renderView();
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 75,
  },
});

const { container } = styles;

export default CryptoContainer;
