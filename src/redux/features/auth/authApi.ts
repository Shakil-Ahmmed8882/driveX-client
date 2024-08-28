/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from '../../api/baseApi';





const authApi = baseApi.injectEndpoints({
  endpoints: (builder:any) => ({
    signUp: builder.mutation({
      query: (userInfo: any) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo: any) => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
