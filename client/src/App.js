import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchTodos } from './redux/actions';

import Todo from './pages/todo';

store.dispatch(fetchTodos());

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;
