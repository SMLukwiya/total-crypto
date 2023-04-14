import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";
import { appendHeadersToUrl } from "../../utils/helpers";

export const cyptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCoins: builder.query({
      query: () => appendHeadersToUrl("/exchanges"),
    }),
  }),
});
