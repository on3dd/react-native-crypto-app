import { combineReducers } from 'redux';
import coinsReducer from './coinsReducer';
import coinReducer from './coinReducer';

export default combineReducers({
  coins: coinsReducer,
  coin: coinReducer,
});
