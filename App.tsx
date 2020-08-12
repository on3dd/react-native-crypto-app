import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

import Header from './src/components/Header';
import CryptoContainer from './src/components/CryptoContainer';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
}
