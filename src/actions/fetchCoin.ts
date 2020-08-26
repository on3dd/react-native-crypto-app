import axiosService from '../utils/axiosService';

import {
  FETCHING_COIN,
  FETCHING_COIN_SUCCESS,
  FETCHING_COIN_FAIL,
} from '../utils/actionTypes';

const fetchCoin = (id: string) => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_COIN });

    return axiosService
      .get(
        `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`,
      )
      .then((res) => {
        dispatch({ type: FETCHING_COIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_COIN_FAIL, payload: err.data });
      });
  };
};

export default fetchCoin;
