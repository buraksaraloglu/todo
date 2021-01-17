/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import axios from 'axios';

import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions';

import Checkbox from '../Checkbox';

import './c-todo.scss';

const TodoItem = ({ todo, toggleTodo }) => {
  const [toggle, setToggle] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);

  const handleCheck = () => {
    setToggle(!toggle);
    setCompleted(!completed);
  };

  useEffect(() => {
    const timer =
      toggle &&
      setTimeout(() => {
        axios
          .put(`/api/v1/todos/${todo._id}`, { ...todo, completed })
          .then(() => {
            toggleTodo(todo._id);
          })
          .catch((error) => new Error(error));
        setToggle(false);
      }, 700);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  return (
    <div className={cx('c-todo-item', todo && completed && 'done')}>
      <Checkbox onCheck={handleCheck} isChecked={completed} />
      <span className="c-todo-item__task" role="listitem">
        {todo.content}
      </span>
    </div>
  );
};

// export default Todo;
export default connect(null, { toggleTodo })(TodoItem);
