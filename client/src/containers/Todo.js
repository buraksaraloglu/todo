/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selectors';

import store from '../redux/store';
import { fetchTodos } from '../redux/actions';

import TodoItem from '../compontents/TodoItem/TodoItem';
import Loading from '../compontents/Loading';

const TodoContainer = ({ todos }) => {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (status === 'loading' && !todos.length) {
      store.dispatch(fetchTodos()).then((res) => setStatus(res));
    }
  }, [status, todos]);

  if (status === 'loading') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
        <h3 style={{ color: '#bdbdbd', marginBottom: '1rem' }}>Loading</h3>
        <Loading />
      </div>
    );
  }
  if (status === 'resolved') {
    return (
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo) => <TodoItem key={`todo-${todo.id}`} todo={todo} />)
          : '🎉 No todos, yay'}
      </ul>
    );
  }

  throw new Error(`This shouldn't have happened`);
};

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoContainer);
