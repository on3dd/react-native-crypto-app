import { Platform, StatusBar } from 'react-native';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const API_BASE_URL = 'https://api.coingecko.com/api/v3';
