import { api } from "../api/baseApi";

const userSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (query:string) => {
                return {
                    url: "/user?"+query,
                };
            },
        }),
    }),
});
export const {useGetUsersQuery} = userSlice;