import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';

import { useFetching } from '../../utils/hooks';
import fetchCoins from '../../actions/fetchCoins';
import { CoinsContainerProps } from '../../types/ContainerProps';
import RootState from '../../types/RootState';

import BaseSpinner from '../base-ui/BaseSpinner';
import CoinsCard from './CoinsCard';

const CoinsContainer = ({ navigation }: CoinsContainerProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const coins = useSelector((state: RootState) => state.coins);

  useFetching(fetchCoins);

  const renderView = () => {
    return coins.isFetching ? renderSpinner() : renderList();
  };

  const renderSpinner = () => {
    return <BaseSpinner visible={coins.isFetching} />;
  };

  const renderList = () => {
    return (
      <FlatList
        data={coins.data}
        initialNumToRender={10}
        keyExtractor={(item) => item.id}
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
            onPress={onPress}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    );
  };

  const onPress = (id: string) => navigation.navigate('Coin', { id });

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
    paddingHorizontal: 20,
  },
});

const { view, container } = styles;

export default CoinsContainer;
