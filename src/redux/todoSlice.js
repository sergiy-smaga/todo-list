import { useDispatch, useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTodos,
  addPostedTodo,
  deleteTodoThunk,
  changeTodo,
} from './todoOperations';
import { useEffect } from 'react';

export const todoSlice = createSlice({
  name: 'todos',
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
      state.map(todo => (todo.id === payload.id ? payload : todo)),
  },
});

export default todoSlice.reducer;

export const getTodos = state => state.todos;

export const getTodosCompleted = state =>
  state.todos.filter(({ isCompleted }) => isCompleted);

export const getTodosInProgress = state =>
  state.todos.filter(({ isCompleted }) => !isCompleted);

export const getTodosFavorite = state =>
  state.todos.filter(
    ({ isFavorite, isCompleted }) => isFavorite && !isCompleted
  );

export const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const todosCompleted = useSelector(getTodosCompleted);
  const todosInProgress = useSelector(getTodosInProgress);
  const todosFavorite = useSelector(getTodosFavorite);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return {
    todos,
    todosCompleted,
    todosInProgress,
    todosFavorite,
  };
};
