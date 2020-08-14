import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from '../utils/actionTypes';

import Action from '../types/Action';
import CryptoState from '../types/CryptoState';

const initialState: CryptoState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

const cryptoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_COIN_DATA_FAIL:
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

export default cryptoReducer;
