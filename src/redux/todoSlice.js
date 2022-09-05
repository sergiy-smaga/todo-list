import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";
import {
  fetchTodos,
  addPostedTodo,
  deleteTodoThunk,
  changeTodo,
} from "./todoOperations";

// interface ITodo {
//   id: string;
//   text: string;
//   isCompleted: boolean;
//   isFavorite: boolean;
// }

// export interface ITodos {
//   todos: ITodo[];
// }

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchTodos.fulfilled]: (_, action) => action.payload,
    [addPostedTodo.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [deleteTodoThunk.fulfilled]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload.id),
    [changeTodo.fulfilled]: (state, { payload }) =>
      state.map((todo) => (todo.id === payload.id ? payload : todo)),
  },
});

export default todoSlice.reducer;

export const getTodos = (state) => state.todos;

// export const useTodos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector(getTodos);
//   // const handleSetTodos = (todos: []) => dispatch(setAllTodos(todos));
//   return {
//     todos,
//     // handleSetTodos,
//   };
// };
