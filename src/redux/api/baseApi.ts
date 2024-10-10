import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { toast } from "sonner";
import { TError } from "../../types";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "https://drivex-backend.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) { 
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);


  
  // Usage in your code:
  if (result?.error?.status === 404) {
    const errorMessage = (result?.error as TError)?.data?.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }
  if (result?.error?.status === 409) {
    const errorMessage = (result?.error as TError)?.data?.message;
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }
  

  // if (result?.error?.status === 401) {
  //   //* Send Refresh
  //   console.log("Sending refresh token");

  //   const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
  //     method: "POST",
  //     credentials: "include",
  //   });

  //   const data = await res.json();

  //   if (data?.token) {
      
  //     const user = (api.getState() as RootState).auth.user;

  //     api.dispatch(
  //       setUser({
  //         user:data.data,
  //         token: data.token,
  //       })
  //     );

  //     result = await baseQuery(args, api, extraOptions);
  //   } else {
  //     // api.dispatch(logout());
  //   }
  // }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["booking","carList"],
  endpoints: () => ({}),
});
