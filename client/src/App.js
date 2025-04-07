import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';

const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setTodos([data, ...todos]);
    setText('');
  };

  const toggleTodo = async (id, completed) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed }),
    });
    const updated = await res.json();
    setTodos(todos.map(todo => (todo._id === id ? updated : todo)));
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>📝 Ma Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          placeholder="Ajouter une tâche..."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" style={{ marginTop: '10px' }}>Ajouter</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
