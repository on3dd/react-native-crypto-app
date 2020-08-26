import {
  FETCHING_COINS,
  FETCHING_COINS_SUCCESS,
  FETCHING_COINS_FAIL,
} from '../utils/actionTypes';

import Action from '../types/Action';
import CoinsState from '../types/states/coins';

const initialState: CoinsState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

const coinsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCHING_COINS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_COINS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_COINS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err,
      });

    default:
      return state;
  }
};

export default coinsReducer;
