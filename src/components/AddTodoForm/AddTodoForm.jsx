import { useState } from 'react';
import { addPostedTodo } from '../../redux/todoOperations';
import { useDispatch } from 'react-redux';

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch(addPostedTodo(value));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <textarea
          name="todo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </label>
      <button>Add new todo</button>
    </form>
  );
};

export default AddTodoForm;
