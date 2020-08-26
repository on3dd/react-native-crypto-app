import Coin from "./Coin";

export default interface CoinsState {
  data: null | Coin[];
  errorMessage: null | string;
  hasError: boolean;
  isFetching: null | boolean,
}
