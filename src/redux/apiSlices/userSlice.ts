import { api } from "../api/baseApi";

const userSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ({query}:{query?:string}) => {
               
                
                return {
                    url: "/user?"+query,
                };
            },
        }),
        changeStatusUser: builder.mutation({
            query: ({id}:{id:string}) => {
                return {
                    method: "PATCH",
                    url: `/user/${id}`,
                };
            },
        }),
    }),
});
export const {useGetUsersQuery, useChangeStatusUserMutation} = userSlice;