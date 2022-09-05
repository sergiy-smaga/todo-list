import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';

function App() {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
