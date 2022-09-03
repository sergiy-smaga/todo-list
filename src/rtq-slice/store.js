import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./todoSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    todosApi.middleware,
  ],
});

setupListeners(store.dispatch);
