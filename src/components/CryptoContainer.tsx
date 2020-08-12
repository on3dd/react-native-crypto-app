import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useFetching } from '../utils/hooks';
import fetchCoinData from '../actions/fetchCoinData';
import CoinCard from './CoinCard';

const CryptoContainer = () => {
  const crypto = useSelector((state) => state.crypto);

  useFetching(fetchCoinData);

  const renderView = () => {
    if (crypto.isFetching) {
      return renderSpinner();
    }

    // return renderList();
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
    return crypto.data.map((el, idx) => (
      <CoinCard
        key={idx}
        name={el.name}
        symbol={el.symbol}
        current_price={el.current_price}
        price_change_24h={el.price_change_24h}
        price_percentage_change_24h={el.price_percentage_change_24h}
      />
    ));
  };

  return <View>{renderView()}</View>;
};

export default CryptoContainer;
