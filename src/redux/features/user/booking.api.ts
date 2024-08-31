// import { TAcademicSemester } from "../../../pages/admin/academicManagement/AcademicManagement.type";
// import { TQueryParams, TResponseRedux } from "../../../types/global";
import { TQueryParam, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // My-bookings
    getAllBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["booking"],
    }),
    getMyAllBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bookings/my-bookings",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["booking"],
    }),

    getSingleBooking: builder.query({
      query: (id: string) => {
        return {
          url: `/bookings/${id}`,
          method: "GET",
        };
      },

      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["booking"],
    }),

    bookCar: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    updateBooking: builder.mutation({
      query: ({ bookingId,formattedData }) => ({
        url: `/bookings/${bookingId}`,
        method: "PUT",
        body: formattedData,
      }),
      invalidatesTags: ["booking"],
    }),
    // delete
    deleteBooking: builder.mutation({
      query: (bookingId:string) => ({
        url: `/bookings/${bookingId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useDeleteBookingMutation,
  useUpdateBookingMutation,
  useGetAllBookingsQuery,
  useGetSingleBookingQuery,
  useGetMyAllBookingsQuery,
  useBookCarMutation,
} = bookingApi;
