import {
  FETCHING_COIN,
  FETCHING_COIN_SUCCESS,
  FETCHING_COIN_FAIL,
} from '../utils/actionTypes';

import Action from '../types/Action';
import CoinState from '../types/states/coins';

const initialState: CoinState = {
  isFetching: null,
  data: null,
  hasError: false,
  errorMessage: null,
};

const coinReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCHING_COIN:
      return Object.assign({}, state, {
        isFetching: true,
        // data: null,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_COIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_COIN_FAIL:
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

export default coinReducer;
