export interface CryptoCoinStats {
  total: number;
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
}

export interface CryptoCoin {
  "24hVolume": string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: Date;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  symbol: string;
  tier: number;
  uuid: string;
}

export interface Coins {
  stats: CryptoCoinStats;
  coins: CryptoCoin[];
}

export interface CoinDefault {
  data: Coins;
  status: string;
}

interface Link {
  name: string;
  type: string;
  url: string;
}

export interface CryptoCoinDetail extends CryptoCoin {
  allTimeHigh: {
    price: string;
    timestamp: Date;
  };
  description: string;
  fullyDilutedMarketCap: string;
  hasContent: boolean;
  links: Link[];
  notices: null;
  numberOfExchanges: number;
  numberOfMarkets: number;
  priceAt: Date;
  websiteUrl: string;
  tags: string[];
  supply: {
    circulating: string;
    confirmed: boolean;
    max: string;
    supplyAt: Date;
    total: string;
  };
}

export interface CoinHistory {
  price: string;
  timestamp: Date;
}

export interface CoinHistoryResult {
  status: string;
  data: {
    change: string;
    history: CoinHistory[];
  };
}
