import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://630f52fd37925634188cc9fb.mockapi.io",
  }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: () => "/todos",
      providesTags: ["todos"],
    }),
    postTodo: builder.mutation({
      query: (value) => ({
        url: "/materials",
        method: "POST",
        body: {
          value,
          isFavorite: false,
          isCompleted: false,
        },
      }),
      invalidatesTags: ["todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const {
  useGetTodoListQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
