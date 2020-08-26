interface ROI {
  currency: string;
  percentage: number;
  times: number;
}

export default interface Coin {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null | ROI;
  symbol: string;
  total_supply: number;
  total_volume: number;
}
