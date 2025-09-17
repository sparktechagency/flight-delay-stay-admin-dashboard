import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


 
const token  = localStorage.getItem("token");

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.10.7.72:5000/api/v1",
        headers: {
            Authorization: `Bearer ${token}`,
          }
    }),
    endpoints: () => ({})
});

// export const imageUrl = "http://206.189.231.81:5000";
export const imageUrl = "http://10.10.7.72:5000";