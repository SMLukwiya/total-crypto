import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";
import { appendHeadersToUrl } from "../../utils/helpers";
import {
  Coins,
  CoinDefault,
  CryptoCoinDetail,
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
      transformResponse: (data: { status: string; data: CryptoCoinDetail }) => {
        return data.data;
      },
    }),
  }),
});

export const { useGetAllCoinsQuery, useGetCoinByIdQuery } = cryptoApi;
