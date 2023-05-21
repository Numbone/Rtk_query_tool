import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../models/IUser";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[],number>({
      query: (limit) => ({
        url: "/posts",
        params:{
            _limit:limit
        }
      }),
      providesTags:(result)=>["Posts"],
    }),
    createPost:build.mutation<IUser,IUser>({
        query: (post) => ({
            url: "/posts",
            method:"POST",
            body:post
          }),
          invalidatesTags:["Posts"]
    })
  })
});
