import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["Auth"],
        }),
        signup: builder.mutation({
            query: (userData) => ({
                url: "/auth/signup",
                method: "POST",
                body: userData,
            }),
            invalidatesTags: ["Auth"],
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["Auth"],
        }),
        getCurrentUser: builder.query({
            query: () => "/auth/me",
            providesTags: ["User"],
        }),
    }),
});

export const {
    useLoginMutation,
    useSignupMutation,
    useLogoutMutation,
    useGetCurrentUserQuery,
} = authApi;


