
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    SSLPayAndReturnCar: builder.mutation({
      query: (data) => ({
        url: "/payment/pay",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
useSSLPayAndReturnCarMutation
} = bookingApi;
