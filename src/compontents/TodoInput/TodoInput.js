/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { BsPlus } from 'react-icons/bs';
import { addTodo } from '../../redux/actions';

import Loading from '../Loading';

import './c-todo-input.scss';

const TodoInput = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  const [resetVisible, setResetVisible] = useState(false);
  const [error, setError] = useState('');
  const [className, setClassName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoInput) {
      setError('Please type your todo.');
      setClassName('warn');
    }

    if (todoInput) {
      setIsLoading(true);
      axios
        .post('https://bs-todo-server.herokuapp.com/api/v1/todos/', { content: todoInput })
        .then((res) => {
          if (res.status === 200) {
            setIsLoading(false);
            const itemId = res.data._id;
            addTodo({ ...res.data, id: itemId });
          }
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
      setTodoInput('');
    }
  };

  const handleChange = (e) => {
    setError(false);
    setClassName('');
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
    <>
      <form className={cx('c-todo-input', className)} onSubmit={handleSubmit}>
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
          <span>Add Todo</span>
        </button>
      </form>
      {error && !isLoading && <pre className="c-warn">{error}</pre>}
      {isLoading && (
        <div style={{ display: 'flex' }}>
          <Loading />
        </div>
      )}
    </>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, { addTodo })(TodoInput);
