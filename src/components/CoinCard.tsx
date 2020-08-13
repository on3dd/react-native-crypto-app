import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles/CoinCardStyles';

type CoinCardProps = {
  image: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
};

const CoinCard = (props: CoinCardProps) => {
  return (
    <View style={container}>
      <View style={infoContainer}>
        <Image style={image} source={{ uri: props.image }} />
        <Text style={coinSymbol}>{props.symbol.toUpperCase()}</Text>
        <Text style={seperator}>|</Text>
        <Text style={coinName}>{props.name}</Text>
        <Text style={coinPrice}>
          {props.current_price}
          <Text style={moneySymbol}>$</Text>
        </Text>
      </View>

      <View style={statisticsContainer}>
        <View style={statisticsItem}>
          <Text style={statisticsMetric}>24h, $:</Text>
          <Text
            style={[
              percentChange,
              props.price_change_24h < 0
                ? percentChangeMinus
                : percentChangePlus,
            ]}
          >
            {props.price_change_24h
              ? props.price_change_24h.toFixed(3)
              : 'No data'}
          </Text>
        </View>

        <View style={statisticsItem}>
          <Text style={statisticsMetric}>24h, %:</Text>
          <Text
            style={[
              percentChange,
              props.price_change_percentage_24h < 0
                ? percentChangeMinus
                : percentChangePlus,
            ]}
          >
            {props.price_change_percentage_24h
              ? props.price_change_percentage_24h.toFixed(3)
              : 'No data'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const {
  container,
  image,
  moneySymbol,
  infoContainer,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  statisticsItem,
  statisticsMetric,
  seperator,
  percentChange,
  percentChangePlus,
  percentChangeMinus,
} = styles;

export default CoinCard;
