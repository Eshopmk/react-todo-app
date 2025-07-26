import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (!newTask.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ToDoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;

