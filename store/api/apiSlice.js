import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
    prepareHeaders: (headers) => {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // Handle 401 Unauthorized errors
    if (result?.error?.status === 401) {
        // Clear token from localStorage
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            // Redirect to login page
            window.location.href = "/login";
        }
    }

    return result;
};

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["User", "Auth"],
    endpoints: (builder) => ({}),
    refetchOnMountOrArgChange: true,
});


