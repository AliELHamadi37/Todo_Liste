import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text });
  await todo.save();
  res.status(201).json(todo);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo supprimé' });
};
