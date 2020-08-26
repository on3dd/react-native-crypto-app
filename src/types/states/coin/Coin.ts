interface Description {
  en: string;
}

interface ReposUrl {
  github: string[];
  bitbucket: any[];
}

interface Links {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier?: any;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposUrl;
}

interface Image {
  thumb: string;
  small: string;
  large: string;
}

interface CurrenciesNumber {
  aed: number;
  ars: number;
  aud: number;
  bch: number;
  bdt: number;
  bhd: number;
  bmd: number;
  bnb: number;
  brl: number;
  btc: number;
  cad: number;
  chf: number;
  clp: number;
  cny: number;
  czk: number;
  dkk: number;
  eos: number;
  eth: number;
  eur: number;
  gbp: number;
  hkd: number;
  huf: number;
  idr: number;
  ils: number;
  inr: number;
  jpy: number;
  krw: number;
  kwd: number;
  lkr: number;
  ltc: number;
  mmk: number;
  mxn: number;
  myr: number;
  nok: number;
  nzd: number;
  php: number;
  pkr: number;
  pln: number;
  rub: number;
  sar: number;
  sek: number;
  sgd: number;
  thb: number;
  try: number;
  twd: number;
  uah: number;
  usd: number;
  vef: number;
  vnd: number;
  xag: number;
  xau: number;
  xdr: number;
  xlm: number;
  xrp: number;
  zar: number;
  link: number;
}

interface CurrenciesDate {
  aed: Date;
  ars: Date;
  aud: Date;
  bch: Date;
  bdt: Date;
  bhd: Date;
  bmd: Date;
  bnb: Date;
  brl: Date;
  btc: Date;
  cad: Date;
  chf: Date;
  clp: Date;
  cny: Date;
  czk: Date;
  dkk: Date;
  eos: Date;
  eth: Date;
  eur: Date;
  gbp: Date;
  hkd: Date;
  huf: Date;
  idr: Date;
  ils: Date;
  inr: Date;
  jpy: Date;
  krw: Date;
  kwd: Date;
  lkr: Date;
  ltc: Date;
  mmk: Date;
  mxn: Date;
  myr: Date;
  nok: Date;
  nzd: Date;
  php: Date;
  pkr: Date;
  pln: Date;
  rub: Date;
  sar: Date;
  sek: Date;
  sgd: Date;
  thb: Date;
  try: Date;
  twd: Date;
  uah: Date;
  usd: Date;
  vef: Date;
  vnd: Date;
  xag: Date;
  xau: Date;
  xdr: Date;
  xlm: Date;
  xrp: Date;
  zar: Date;
  link: Date;
}

interface FullyDilutedValuation {}

interface Sparkline7d {
  price: number[];
}

interface MarketData {
  current_price: CurrenciesNumber;
  roi: any;
  ath: CurrenciesNumber;
  ath_change_percentage: CurrenciesNumber;
  ath_date: CurrenciesDate;
  atl: CurrenciesNumber;
  atl_change_percentage: CurrenciesNumber;
  atl_date: CurrenciesDate;
  market_cap: CurrenciesNumber;
  market_cap_rank: number;
  fully_diluted_valuation: FullyDilutedValuation;
  total_volume: CurrenciesNumber;
  high_24h: CurrenciesNumber;
  low_24h: CurrenciesNumber;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: CurrenciesNumber;
  price_change_percentage_1h_in_currency: CurrenciesNumber;
  price_change_percentage_24h_in_currency: CurrenciesNumber;
  price_change_percentage_7d_in_currency: CurrenciesNumber;
  price_change_percentage_14d_in_currency: CurrenciesNumber;
  price_change_percentage_30d_in_currency: CurrenciesNumber;
  price_change_percentage_60d_in_currency: CurrenciesNumber;
  price_change_percentage_200d_in_currency: CurrenciesNumber;
  price_change_percentage_1y_in_currency: CurrenciesNumber;
  market_cap_change_24h_in_currency: CurrenciesNumber;
  market_cap_change_percentage_24h_in_currency: CurrenciesNumber;
  total_supply: number;
  max_supply: any;
  circulating_supply: number;
  sparkline_7d: Sparkline7d;
  last_updated: Date;
}

interface PublicInterestStats {
  alexa_rank: number;
  bing_matches?: any;
}

export default interface Coin {
  id: null |string;
  symbol: null |string;
  name: null |string;
  asset_platform_id: any;
  block_time_in_minutes: null |number;
  hashing_algorithm: null |string;
  categories: null |string[];
  public_notice: null | any;
  description: null |Description;
  links: null | Links;
  image: null | Image;
  country_origin: null | string;
  genesis_date: null | string;
  sentiment_votes_up_percentage: null | number;
  sentiment_votes_down_percentage: null | number;
  market_cap_rank: null | number;
  coingecko_rank: null | number;
  coingecko_score: null | number;
  developer_score: null | number;
  community_score: null | number;
  liquidity_score: null | number;
  public_interest_score: null | number;
  market_data: null | MarketData;
  public_interest_stats: null | PublicInterestStats;
  status_updates: null | any[];
  last_updated: null | Date;
}
