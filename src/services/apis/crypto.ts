import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";
import { appendHeadersToUrl } from "../../utils/helpers";
import { Coins, CoinDefault } from "../../shared/types/crypto.shema";

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
  }),
});

export const { useGetAllCoinsQuery } = cryptoApi;
