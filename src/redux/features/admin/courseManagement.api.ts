// import { TAcademicSemester } from "../../../pages/admin/academicManagement/AcademicManagement.type";
// import { TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
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




    addRegisteredSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddRegisteredSemesterMutation } =
  academicManagementApi;
