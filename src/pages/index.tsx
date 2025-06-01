// src/pages/index.tsx
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // あとでインストール
import { Todo } from '../types/todo';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // --- ローカルストレージ対応 (任意) ---
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  // --- ローカルストレージ対応ここまで ---

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Next.js Todo App</title>
        <meta name="description" content="Simple Todo App with Next.js" />
      </Head>

      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>My Todo List</h1>
      </header>

      <main>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
      </main>
    </div>
  );
}
