export interface CryptoNewsQueryParams {
  q: string;
  count: number;
  textFormat: string;
  freshness: string;
  safeSearch: string;
}

export interface CryptoNewsArticle {
  _type: string;
  name: string;
  url: string;
  image: {
    thumbnail: {
      contentUrl: string;
      width: number;
      height: number;
    };
  };
  description: string;
  provider: [
    {
      name: string;
      image: {
        thumbnail: {
          contentUrl: string;
        };
      };
    }
  ];
  datePublished: string;
}

export interface CryptoNewsResults {
  _type: string;
  readLink: string;
  queryContext: {
    _type: string;
    originalQuery: string;
    adultIntent: boolean;
    totalEstimatedMatches: number;
  };
  value: CryptoNewsArticle[];
}
