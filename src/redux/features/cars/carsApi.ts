/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParam, TResponseRedux } from '../../../types';
import { baseApi } from '../../api/baseApi';





const carApi = baseApi.injectEndpoints({
  endpoints: (builder:any) => ({
    
     getAllCars: builder.query({
      query: (args:TQueryParam[]) => {
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
    }),

     getSingleCar: builder.query({
      query: (carId:string) => {
        return {
          url: `/cars/${carId}`,
          method: "GET"
        };
      },
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),




}),
});

export const { useGetAllCarsQuery, useGetSingleCarQuery } = carApi;
