const BASIC_URL = 'https://630f52fd37925634188cc9fb.mockapi.io/todos';

export const getTodoList = async () => {
  const response = await fetch(BASIC_URL);
  const data = await response.json();
  return data;
};

export const postTodo = async text => {
  const todo = {
    text,
    date: Date.now(),
    isFavorite: false,
    isCompleted: false,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(BASIC_URL, options);
  const data = await response.json();
  return data;
};

export const deleteTodo = async id => {
  const options = {
    method: 'DELETE',
  };
  const response = await fetch(`${BASIC_URL}/${id}`, options);
  const data = await response.json();
  return data;
};

export const putTodo = async todo => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${BASIC_URL}/${todo.id}`, options);
  const data = await response.json();
  return data;
};
