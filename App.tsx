import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

import BaseHeader from './src/components/BaseHeader';
import BaseStatusBar from './src/components/BaseStatusBar';
import CryptoContainer from './src/components/CryptoContainer';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <BaseStatusBar barStyle="light-content" />
        <BaseHeader />
        <CryptoContainer />
      </View>
    </Provider>
  );
}
