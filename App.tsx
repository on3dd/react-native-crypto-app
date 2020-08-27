import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import store from './src/store';
import { RootStackParamList } from './src/types/Navigation';

import HomeScreen from './src/screens/HomeScreen';
import CoinScreen from './src/screens/CoinScreen';

const Stack = createStackNavigator<RootStackParamList>();
const screenOptions: StackNavigationOptions = {
  animationEnabled: false,
  headerShown: false,
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Coin" component={CoinScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
