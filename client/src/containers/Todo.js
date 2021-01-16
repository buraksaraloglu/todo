/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import TodoInput from '../compontents/TodoInput';
import { getTodosByVisibilityFilter } from '../redux/selectors';

import VisibilityFilters from '../compontents/VisibilityFilters';

import TodoItem from '../compontents/TodoItem/TodoItem';

const TodoContainer = ({ todos }) => (
  <>
    <TodoInput />
    <VisibilityFilters />
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo) => <TodoItem key={`todo-${todo.id}`} todo={todo} />)
        : '🎉 No todos, yay'}
    </ul>
  </>
);

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoContainer);
