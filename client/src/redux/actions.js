import axios from 'axios';
import { ADD_TODO, FETCH_TODOS_SUCCESS, TOGGLE_TODO, SET_FILTER } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

// eslint-disable-next-line no-unused-vars
const fetchTodosSuccess = (content) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: {
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({ type: SET_FILTER, payload: { filter } });

// eslint-disable-next-line no-unused-vars
export const fetchTodos = () => (dispatch) => {
  try {
    axios
      .get('/api/getTodos')
      .then((res) => dispatch(fetchTodosSuccess(res.data)))
      .catch((err) => new Error(err));
  } catch (e) {
    throw new Error(e);
  }
};
