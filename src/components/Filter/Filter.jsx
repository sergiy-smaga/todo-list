import { useState } from 'react';

const Filter = ({ onChange }) => {
  const [checked, setChecked] = useState({
    completed: false,
    inProgress: false,
    favorite: false,
  });

  const handleChecking = e => {
    if (e.target.checked) {
      onChange(e.target.name);
      setChecked({
        completed: false,
        inProgress: false,
        favorite: false,
        [e.target.name]: true,
      });
    } else {
      onChange('');
      setChecked({
        completed: false,
        inProgress: false,
        favorite: false,
      });
    }
  };

  return (
    <div>
      <label>
        Show completed
        <input
          checked={checked.completed}
          type="checkbox"
          onChange={handleChecking}
          name="completed"
        />
      </label>
      <label>
        Show in progress
        <input
          checked={checked.inProgress}
          type="checkbox"
          onChange={handleChecking}
          name="inProgress"
        />
      </label>
      <label>
        Show favorite
        <input
          checked={checked.favorite}
          type="checkbox"
          onChange={handleChecking}
          name="favorite"
        />
      </label>
    </div>
  );
};

export default Filter;
