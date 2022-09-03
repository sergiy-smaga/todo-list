import React, { useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { getTodoList } from "./service/api";
// import { useTodos } from "./redux/todoSlice";
import { useState } from "react";

interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
  isFavorite: boolean;
}

export interface ITodos {
  todos: ITodo[];
}

function App() {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
