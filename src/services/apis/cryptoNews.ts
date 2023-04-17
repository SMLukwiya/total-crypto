import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASER_URL_NEWS } from "../../utils/constants";
import { appendHeadersToNewsUrl } from "../../utils/helpers";
import {
  CryptoNewsQueryParams,
  CryptoNewsResults,
  CryptoNewsArticle,
} from "../../shared/types/cryptoNews.schema";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASER_URL_NEWS }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<CryptoNewsArticle[], CryptoNewsQueryParams>({
      query: (queryParams) =>
        appendHeadersToNewsUrl("/news/search", queryParams),
      transformResponse: (data: CryptoNewsResults) => {
        return data.value;
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
