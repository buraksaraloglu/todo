import React from 'react';

import Layout from '../compontents/Layout';
import TodoInput from '../compontents/TodoInput';
import VisibilityFilters from '../compontents/VisibilityFilters';
import TodoContainer from '../containers/Todo';

const Todo = () => (
  <Layout>
    <div className="c-todo-container">
      <TodoInput />
      <VisibilityFilters />
      <TodoContainer />
    </div>
  </Layout>
);

export default Todo;
