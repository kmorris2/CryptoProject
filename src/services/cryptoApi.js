import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '2a9c18bba7msh69bb6a42eab7c9bp10be1djsn90e722dece4d'

    //New API key
    // 'x-rapidapi-key': '2a9c18bba7msh69bb6a42eab7c9bp10'
    // 'x-rapidapi-key': 'coinrankingbd541510bfad9d57b9f66197d0bd84afa2b012d624b03e57'

    // 'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    // 'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    // baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL  }),
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            // query: ([coinId, timePeriod]) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
            query: ([coinId, timePeriod]) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;