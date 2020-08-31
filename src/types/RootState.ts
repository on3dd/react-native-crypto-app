import CoinState from './states/coin';
import CoinsState from './states/coins';
import MenuState from './states/menu';

export default interface RootState {
  coins: CoinsState;
  coin: CoinState;
  menu: MenuState;
}
