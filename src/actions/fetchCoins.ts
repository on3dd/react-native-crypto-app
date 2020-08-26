import axiosService from '../utils/axiosService';

import {
  FETCHING_COINS,
  FETCHING_COINS_SUCCESS,
  FETCHING_COINS_FAIL,
} from '../utils/actionTypes';

const fetchCoins = () => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_COINS });

    return axiosService
      .get('/coins/markets?vs_currency=usd')
      .then((res) => {
        dispatch({ type: FETCHING_COINS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_COINS_FAIL, payload: err.data });
      });
  };
};

export default fetchCoins;
