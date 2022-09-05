import { deleteTodoThunk, changeTodo } from '../../redux/todoOperations';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';

export default function TodoItem({ item }) {
  const dispatch = useDispatch();
  const { id, text, isFavorite, isCompleted } = item;
  const [editMode, setEditMode] = useState(false);
  const textAreaRef = useRef();

  const handleKeyDown = e => {
    if (e.code === 'Enter') {
      dispatch(
        changeTodo({
          ...item,
          text: textAreaRef.current.value,
        })
      );
      window.removeEventListener('keydown', handleKeyDown);
      setEditMode(false);
    }
  };

  const handleEditor = () => {
    setEditMode(true);
    window.addEventListener('keydown', handleKeyDown);
  };

  return (
    <li style={{ display: 'flex' }}>
      {editMode ? (
        <textarea ref={textAreaRef} defaultValue={text} autoFocus />
      ) : (
        <h5>{text}</h5>
      )}

      <p>{id}</p>
      <button>Menu</button>
      <div>
        Pop-up
        <ul style={{ display: 'flex' }}>
          <li>
            <button
              onClick={() => {
                dispatch(
                  changeTodo({
                    ...item,
                    isCompleted: !isCompleted,
                  })
                );
              }}
            >
              {isCompleted ? 'Back in work' : 'Completed'}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(
                  changeTodo({
                    ...item,
                    isFavorite: !isFavorite,
                  })
                );
              }}
            >
              {!isFavorite ? 'Add to favorite' : 'Remove from favorite'}
            </button>
          </li>
          <li>
            <button onClick={() => handleEditor(text)}>Edit</button>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(deleteTodoThunk(id));
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
}
