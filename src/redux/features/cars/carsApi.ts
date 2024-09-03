import { TQueryParam, TResponseRedux } from "../../../types";
import { TCar } from "../../../types/booking.type";
import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (args: TQueryParam[]) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/cars",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["carList"],
    }),

    getSingleCar: builder.query({
      query: (carId: string) => {
        return {
          url: `/cars/${carId}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TCar[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: (_, __, carId) => [{ type: "carList", id: carId }],

    }),

    addCar: builder.mutation({
      query: (data) => ({
        url: `/cars/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (_, __, { carId }) => [
        { type: "carList", id: carId },
      ],
    }),

    updateCar: builder.mutation({
      query: ({ data, carId }: { data: any; carId: string }) => ({
        url: `/cars/${carId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags:["carList"]
    }),

    deleteCar: builder.mutation({
      query: (carId: string) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_, __, carId) => [
        { type: "carList", id: carId },
        { type: "carList" }, // Invalidate the list to trigger a refetch
      ],
    }),
  }),
});

export const {
  useUpdateCarMutation,
  useGetAllCarsQuery,
  useAddCarMutation,
  useGetSingleCarQuery,
  useDeleteCarMutation,
} = carApi;