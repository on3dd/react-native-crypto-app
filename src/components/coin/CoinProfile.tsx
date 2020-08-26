import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Coin from '../../types/states/coin/Coin';

import BaseQuote from '../base-ui/BaseQuote';

type CoinProfileProps = {
  data: Coin;
};

const CoinProfile = ({ data }: CoinProfileProps) => {
  return (
    <View style={container}>
      <ScrollView contentContainerStyle={scroll}>
        <View style={header}>
          <View style={left}>
            <View style={imageContainer}>
              <Image style={image} source={{ uri: data.image.large }} />
            </View>
            <View style={info}>
              <Text style={name} numberOfLines={1}>
                {data.name}
              </Text>
              <Text style={symbol}>{data.symbol.toUpperCase()}</Text>
            </View>
          </View>

          <View style={right}>
            <Text style={currentPrice}>
              ${data.market_data.current_price.usd.toFixed(3)}
            </Text>

            <Text
              style={[
                priceChange,
                data.market_data.price_change_24h > 0
                  ? priceChangePlus
                  : priceChangeMinus,
              ]}
            >
              {data.market_data.price_change_24h.toFixed(2)}%
            </Text>
          </View>
        </View>

        <View style={prices}>
          <View style={priceContainer}>
            <Text style={[date, priceOpen]}>24hr Open</Text>
            <Text style={price}>
              ${data.market_data.current_price.usd.toFixed(3)}
            </Text>
          </View>
          <View style={priceContainer}>
            <Text style={[date, priceHigh]}>24hr High</Text>
            <Text style={price}>
              ${data.market_data.high_24h.usd.toFixed(3)}
            </Text>
          </View>
          <View style={priceContainer}>
            <Text style={[date, priceLow]}>24hr Low</Text>
            <Text style={price}>
              ${data.market_data.low_24h.usd.toFixed(3)}
            </Text>
          </View>
        </View>

        <View style={description}>
          <BaseQuote text={data.description.en.replace(/(<([^>]+)>)/gi, '')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  scroll: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  left: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  symbol: {
    fontSize: 12,
    fontWeight: '200',
    color: '#666',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: '600',
  },
  priceChange: {
    fontSize: 13,
    fontWeight: '600',
  },
  priceChangePlus: {
    color: '#00BFA5',
  },
  priceChangeMinus: {
    color: '#DD2C00',
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'column',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  priceOpen: {
    alignSelf: 'flex-start',
  },
  priceHigh: {
    alignSelf: 'center',
  },
  priceLow: {
    alignSelf: 'flex-end',
  },
  description: {
    // marginBottom: 20,
  },
});

const {
  container,
  scroll,
  header,
  left,
  image,
  imageContainer,
  info,
  name,
  symbol,
  right,
  currentPrice,
  priceChange,
  priceChangePlus,
  priceChangeMinus,
  prices,
  priceContainer,
  date,
  price,
  priceOpen,
  priceHigh,
  priceLow,
  description,
} = styles;

export default CoinProfile;
