import { api } from "../api/baseApi";

const analatysSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getAnalatys: builder.query({
            query: ({year}:{year?:string}) => {
                return {
                    url: `/analytics/${year??new Date().getFullYear()}`,
                    method: "GET",
                }
            },
        }),
    }),
});

export const { useGetAnalatysQuery } = analatysSlice;