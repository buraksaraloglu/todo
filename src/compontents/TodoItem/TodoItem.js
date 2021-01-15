/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';

import './c-todo.scss';

const TodoItem = ({ className, checked, todo, onCheck, handleKeyDown }) => (
  <div className={cx('c-todo-item', className)}>
    <Checkbox onCheck={onCheck} handleKeyDown={handleKeyDown} isChecked={checked} />
    <span className="c-todo-item__task" role="listitem">
      {todo}
    </span>
  </div>
);

TodoItem.propTypes = {
  className: PropTypes.string,
  todo: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  className: '',
};

export default TodoItem;
