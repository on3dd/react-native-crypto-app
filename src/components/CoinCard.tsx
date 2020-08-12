import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from '../utils/coinIcons';

const CoinCard = (props) => {
  return (
    <View style={container}>
      <Image style={image} source={{ uri: props.image }} />
      <Text>{props.symbol}</Text>
      <Text>{props.name}</Text>

      <Text>
        {props.current_price}
        <Text style={bold}>$</Text>
      </Text>

      <Text>Change past 24 hours, $: {props.price_change_24h}</Text>
      <Text>Change past 24 hours, %: {props.price_percentage_change_24h}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  image: {
    width: 40,
    height: 40,
  },

  bold: {
    fontWeight: 'bold',
  },
});

const { container, image, bold } = styles;

export default CoinCard;
