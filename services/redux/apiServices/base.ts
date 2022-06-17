import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: () => ({})
});
