import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type BaseQuoteProps = {
  text?: string;
};

const BaseQuote = ({ text = '' }: BaseQuoteProps) => {
  return (
    <View style={view}>
      <Text style={quote}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingLeft: 10,
    borderLeftColor: '#e5e5e5',
    borderLeftWidth: 3,
  },
  quote: {
    color: '#666',
    fontSize: 14,
  },
});

const { view, quote } = styles;

export default BaseQuote;
