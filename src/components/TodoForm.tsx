// src/components/TodoForm.tsx
import React, { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="新しいTodo"
        style={{ flexGrow: 1, padding: '10px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '10px 15px', marginLeft: '10px' }}>
        追加
      </button>
    </form>
  );
};
export default TodoForm;