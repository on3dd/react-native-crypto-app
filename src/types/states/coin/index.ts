import Coin from "./Coin";

export default interface CoinState {
  data: null | Coin;
  errorMessage: null | string;
  hasError: boolean;
  isFetching: null | boolean,
}
