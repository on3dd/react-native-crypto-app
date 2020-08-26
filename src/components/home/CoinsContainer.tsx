import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { useFetching } from '../../utils/hooks';
import fetchCoins from '../../actions/fetchCoins';
import ContainerProps from '../../types/ContainerProps';
import RootState from '../../types/RootState';

import CoinsCard from './CoinsCard';

const CoinsContainer = ({ navigation }: ContainerProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const coins = useSelector((state: RootState) => state.coins);

  useFetching(fetchCoins);

  const renderView = () => {
    if (coins.isFetching) {
      return renderSpinner();
    }

    return renderList();
  };

  const renderSpinner = () => {
    return (
      <Spinner
        visible={coins.isFetching}
        textContent={'Loading'}
        textStyle={{ color: '#253145' }}
        animation="fade"
      />
    );
  };

  const renderList = () => {
    return (
      <FlatList
        data={coins.data}
        contentContainerStyle={container}
        renderItem={({ item }) => (
          <CoinsCard
            id={item.id}
            image={item.image}
            name={item.name}
            symbol={item.symbol}
            current_price={item.current_price}
            price_change_24h={item.price_change_24h}
            price_change_percentage_24h={item.price_change_percentage_24h}
            navigation={navigation}
          />
        )}
        initialNumToRender={10}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    );
  };

  const onRefresh = () => {
    setRefreshing(true);

    dispatch(fetchCoins);

    setRefreshing(false);
  };

  return <View style={view}>{renderView()}</View>;
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
  },

  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
});

const { view, container } = styles;

export default CoinsContainer;
