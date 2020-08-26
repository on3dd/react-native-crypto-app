import CoinState from './states/coin';
import CoinsState from './states/coins';

export default interface RootState {
  coins: CoinsState;
  coin: CoinState;
}
