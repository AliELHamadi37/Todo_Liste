import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <div className="todo-item" style={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #eee'
  }}>
    <span
      onClick={() => onToggle(todo._id, !todo.completed)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        flex: 1
      }}
    >
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo._id)}>Supprimer</button>
  </div>
);

export default TodoItem;
