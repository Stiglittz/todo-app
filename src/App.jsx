import { useState } from 'react';
import Title from './components/Title';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    setTodos([...todos, text]);
  };

  const removeTodo = (indexToRemove) => {
    const newTodos = todos.filter((todo, idx) => idx !== indexToRemove);
    setTodos(newTodos);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo();
    setText('');
  };

  return (
    <main className="w-full min-h-screen flex flex-col">
      <Title />
      <InputTask text={text} setText={setText} onSubmit={onSubmit} />
      <TaskList todos={todos} removeTodo={removeTodo} />
    </main>
  );
}

