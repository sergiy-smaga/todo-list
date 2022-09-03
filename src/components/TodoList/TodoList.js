import { fetchTodos } from "../../redux/todoOperations";
import { getTodos } from "../../redux/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";

// import type { TypedUseSelectorHook } from "react-redux";
// import type { RootState, AppDispatch } from "../../redux/store";

// const useAppDispatch: () => AppDispatch = useDispatch;
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// interface ITodo {
//   id: string;
//   text: string;
//   isCompleted: boolean;
//   isFavorite: boolean;
// }

// interface IProps {
//   todos: ITodo[];
// }

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul>
      {todos.length > 0 &&
        todos.map((item) => <TodoItem key={item.id} item={item} />)}
    </ul>
  );
};

export default TodoList;
