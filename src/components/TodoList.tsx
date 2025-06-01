// src/components/TodoList.tsx
import React from 'react';
import { Todo } from '../types/todo';

interface TodoListItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onToggleComplete, onDeleteTodo }) => {
  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #eee',
      textDecoration: todo.completed ? 'line-through' : 'none',
      opacity: todo.completed ? 0.6 : 1,
    }}>
      <span onClick={() => onToggleComplete(todo.id)} style={{ cursor: 'pointer', flexGrow: 1 }}>
        {todo.text}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} style={{ marginLeft: '10px', background: 'salmon', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
        削除
      </button>
    </li>
  );
};

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDeleteTodo }) => {
  if (todos.length === 0) {
    return <p>Todoはまだありません。</p>;
  }
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};
export default TodoList;