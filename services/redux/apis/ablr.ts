import { RootState } from "@/services/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ablrApi = createApi({
  reducerPath: "ablrApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.uat.ablr.com/api/v2/public/merchant",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).uiApp.country.secretApiKey;
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
