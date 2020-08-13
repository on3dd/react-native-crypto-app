import axiosService from '../utils/axiosService';

import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from '../utils/actionTypes';

const fetchCoinData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axiosService
      .get('/coins/markets?vs_currency=usd')
      .then((res) => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
};

export default fetchCoinData;
