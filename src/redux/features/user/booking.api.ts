// import { TAcademicSemester } from "../../../pages/admin/academicManagement/AcademicManagement.type";
// import { TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemesters: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();

    //     if (args) {
    //       args.forEach((item: TQueryParams) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }

    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
    //     return {
    //       data: response?.data,
    //       meta: response?.meta,
    //     };
    //   },
    // }),


    bookCar: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useBookCarMutation } = bookingApi;
