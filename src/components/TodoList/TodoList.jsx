import { useTodos } from '../../redux/todoSlice';
import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import Filter from '../Filter/Filter';

const TodoList = () => {
  const { todos, todosCompleted, todosInProgress, todosFavorite } = useTodos();

  const [checkedName, setCheckedName] = useState('');

  return (
    <>
      <Filter onChange={setCheckedName} />
      <ul>
        {checkedName === 'completed' &&
          todosCompleted.length > 0 &&
          todosCompleted.map(item => <TodoItem key={item.id} item={item} />)}
        {checkedName === 'inProgress' &&
          todosInProgress.length > 0 &&
          todosInProgress.map(item => <TodoItem key={item.id} item={item} />)}
        {checkedName === 'favorite' &&
          todosFavorite.length > 0 &&
          todosFavorite.map(item => <TodoItem key={item.id} item={item} />)}
        {checkedName === '' &&
          todos.length > 0 &&
          todos.map(item => <TodoItem key={item.id} item={item} />)}
      </ul>
    </>
  );
};

export default TodoList;
