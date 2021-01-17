/* eslint-disable no-shadow */
import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/actions';

import useUpdateTodo from '../../hooks/useUpdateTodo';
import useDeleteTodo from '../../hooks/useDeleteTodo';

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

  useUpdateTodo(todo, completed, status, setStatus, toggleTodo);
  useDeleteTodo(todo, completed, status, setStatus, deleteTodo);

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

TodoItem.propTypes = {
  todo: PropTypes.shape({
    content: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todo: {},
};

// export default Todo;
export default connect(null, { toggleTodo, deleteTodo })(TodoItem);
