import axios from 'axios';
import { apiBaseURL } from '../utils/constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from '../utils/actionTypes';

const fetchCoinData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios
      .get(
        `${apiBaseURL}/coins/markets?vs_currency=usd&per_page=10`,
      )
      .then((res) => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
};

export default fetchCoinData;
