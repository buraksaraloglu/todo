/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions';

import Checkbox from '../Checkbox';

import './c-todo.scss';

const TodoItem = ({ todo, toggleTodo }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const timer =
      checked &&
      setTimeout(() => {
        toggleTodo(todo.id);
      }, 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <div className={cx('c-todo-item', todo && (todo.completed || checked) && 'done')}>
      <Checkbox onCheck={handleCheck} isChecked={checked} />
      <span className="c-todo-item__task" role="listitem">
        {todo.content}
      </span>
    </div>
  );
};

// export default Todo;
export default connect(null, { toggleTodo })(TodoItem);
