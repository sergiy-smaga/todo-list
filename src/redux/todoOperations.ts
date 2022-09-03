import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoList, postTodo, deleteTodo } from "../service/api";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTodoList();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addPostedTodo = createAsyncThunk(
  "todos/addTodo",
  async (text, { rejectWithValue }) => {
    try {
      const todo = await postTodo(text);
      return todo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/addTodo",
  async (id, { rejectWithValue }) => {
    try {
      const todo = await deleteTodo(id);
      return todo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
