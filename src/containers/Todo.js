import React, { useState, useEffect } from 'react';

import TodoInput from '../compontents/TodoInput';

import TodoItem from '../compontents/TodoItem/TodoItem';

const TodoContainer = () => {
  const [checked, setChecked] = useState(false);
  const [todo, setTodo] = useState('Default');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleTodo = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const submitTimer = setTimeout(() => {
      // console.log('no more typing');
    }, 1000);

    return () => clearTimeout(submitTimer);
  }, [todo]);

  return (
    <>
      <TodoInput />
      <div className="c-todo">
        <TodoItem
          onCheck={handleTodo}
          checked={checked}
          className={checked ? 'done' : ''}
          todo={todo}
          handleChange={handleChange}
          handleKeyDown={handleChange}
        />
      </div>
    </>
  );
};
export default TodoContainer;
