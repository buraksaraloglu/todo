/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { BsPlus } from 'react-icons/bs';
import { addTodo } from '../../redux/actions';

import './c-todo-input.scss';

const TodoInput = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  const [resetVisible, setResetVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoInput) {
      axios
        .post('/api/v1/todos', { content: todoInput })
        .then((res) => {
          const itemId = res.data._id;
          addTodo({ ...res.data, id: itemId });
        })
        .catch((error) => new Error(error));
      setTodoInput('');
    }
  };

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleReset = () => {
    setTodoInput('');
  };

  useEffect(() => {
    if (todoInput) {
      setResetVisible(true);
    } else {
      setResetVisible(false);
    }
  }, [todoInput]);

  return (
    <form className="c-todo-input" onSubmit={handleSubmit}>
      <div className="c-todo-input__todo">
        <input
          value={todoInput}
          onChange={handleChange}
          type="text"
          placeholder="Type your todo..."
        />
        {resetVisible && (
          <button type="button" className="clear" onClick={handleReset}>
            <svg viewBox="0 0 24 24">
              <path className="line" d="M2 2L22 22" />
              <path className="long" d="M9 15L20 4" />
              <path className="arrow" d="M13 11V7" />
              <path className="arrow" d="M17 11H13" />
            </svg>
          </button>
        )}
      </div>
      <button
        className="c-todo-input__submit"
        aria-roledescription="Add Todo"
        type="button"
        onClick={handleSubmit}
      >
        <BsPlus />
        Add Todo
      </button>
    </form>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, { addTodo })(TodoInput);
