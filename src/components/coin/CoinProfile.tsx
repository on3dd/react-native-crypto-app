import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Coin from '../../types/states/coin/Coin';
import styles from '../../styles/components/coin/CoinProfileStyles';

import BaseChart from '../base-ui/BaseChart';
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
            <Text style={currentPrice} numberOfLines={1}>
              ${data.market_data.current_price.usd.toFixed(3)}
            </Text>

            <Text
              style={[
                priceChange,
                data.market_data.price_change_percentage_24h > 0
                  ? priceChangePlus
                  : priceChangeMinus,
              ]}
            >
              {data.market_data.price_change_percentage_24h.toFixed(2)}%
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

        <View style={chart}>
          <BaseChart data={data.market_data.sparkline_7d.price} />
        </View>

        <View style={description}>
          <BaseQuote text={data.description.en.replace(/(<([^>]+)>)/gi, '')} />
        </View>
      </ScrollView>
    </View>
  );
};

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
  chart,
  description,
} = styles;

export default CoinProfile;
