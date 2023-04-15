import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";
import { appendHeadersToUrl } from "../../utils/helpers";
import {
  Coins,
  CoinDefault,
  CryptoCoinDetail,
  CoinHistory,
  CoinHistoryResult,
} from "../../shared/types/crypto.shema";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCoins: builder.query<Coins, void>({
      query: () => appendHeadersToUrl("/coins"),
      transformResponse: (data: CoinDefault) => {
        return data.data;
      },
    }),
    getCoinById: builder.query<CryptoCoinDetail, string>({
      query: (coinId) => appendHeadersToUrl(`/coin/${coinId}`),
      transformResponse: (data: {
        status: string;
        data: { coin: CryptoCoinDetail };
      }) => {
        return data.data.coin;
      },
    }),
    getCoinHistory: builder.query<
      CoinHistory[],
      { coinId: string; timePeriod: string }
    >({
      query: ({ coinId, timePeriod }) =>
        appendHeadersToUrl(`/coin/${coinId}/history`, { timePeriod }),
      transformResponse: (data: CoinHistoryResult) => {
        return data.data.history;
      },
    }),
  }),
});

export const {
  useGetAllCoinsQuery,
  useGetCoinByIdQuery,
  useGetCoinHistoryQuery,
} = cryptoApi;
