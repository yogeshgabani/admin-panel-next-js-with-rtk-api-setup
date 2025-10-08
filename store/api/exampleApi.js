import { apiSlice } from "./apiSlice";

// Example of how to create additional API endpoints
// This is a template - customize for your needs

export const exampleApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // GET request example
        getUsers: builder.query({
            query: () => "/users",
            providesTags: ["User"],
        }),

        // GET request with parameters
        getUserById: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [{ type: "User", id }],
        }),

        // POST request example
        createUser: builder.mutation({
            query: (userData) => ({
                url: "/users",
                method: "POST",
                body: userData,
            }),
            invalidatesTags: ["User"],
        }),

        // PUT request example
        updateUser: builder.mutation({
            query: ({ id, ...userData }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: userData,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
        }),

        // DELETE request example
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),

        // GET request with query parameters
        searchUsers: builder.query({
            query: ({ search, page = 1, limit = 10 }) => ({
                url: "/users/search",
                params: { search, page, limit },
            }),
            providesTags: ["User"],
        }),
    }),
});

// Export hooks for usage in components
export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useSearchUsersQuery,
} = exampleApi;

/* 
  USAGE EXAMPLES IN COMPONENTS:

  // Query (GET)
  const { data, isLoading, error } = useGetUsersQuery();

  // Query with parameters
  const { data, isLoading } = useGetUserByIdQuery(userId);

  // Mutation (POST/PUT/DELETE)
  const [createUser, { isLoading }] = useCreateUserMutation();
  
  const handleCreate = async () => {
    try {
      const result = await createUser({ name: "John", email: "john@example.com" }).unwrap();
      console.log("Created:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Mutation with optimistic updates
  const [deleteUser] = useDeleteUserMutation();
  
  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      await deleteUser(id);
    }
  };
*/


