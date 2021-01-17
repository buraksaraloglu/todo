/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import axios from 'axios';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/actions';

import Checkbox from '../Checkbox';
import DeleteButton from '../DeleteButton';

import './c-todo.scss';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const [status, setStatus] = useState(null);
  const [completed, setCompleted] = useState(todo.completed);

  const handleCheck = () => {
    setStatus('update');
    setCompleted(!completed);
  };

  const handleDelete = async () => {
    setStatus('delete');
  };

  useEffect(() => {
    const timer =
      status === 'update' &&
      setTimeout(() => {
        axios
          .put(`/api/v1/todos/${todo.id}`, { ...todo, completed })
          .then(() => {
            toggleTodo(todo.id);
          })
          .catch(() => setStatus(null));
        setStatus(null);
      }, 300);

    if (status === 'delete') {
      axios.delete(`/api/v1/todos/${todo.id}`).then(() => deleteTodo(todo.id));

      setStatus(null);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [completed, deleteTodo, status, todo, toggleTodo]);

  return (
    <div className={cx('c-todo-item', todo && completed && 'done')}>
      <Checkbox onCheck={handleCheck} isChecked={completed} />
      <span className="c-todo-item__task" role="listitem">
        {todo.content}
      </span>
      <DeleteButton onDelete={handleDelete} />
    </div>
  );
};

// export default Todo;
export default connect(null, { toggleTodo, deleteTodo })(TodoItem);
