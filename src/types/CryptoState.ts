import Coin from "./Coin";

export default interface CryptoState {
  data: null | Coin[];
  errorMessage: null | string;
  hasError: boolean;
  isFetching: null | boolean,
}
