import axios from 'axios';
import { ADD_TODO, FETCH_TODOS_SUCCESS, TOGGLE_TODO, SET_FILTER } from './actionTypes';

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    ...content,
  },
});

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

export const fetchTodos = () => (dispatch) => {
  try {
    axios
      .get('/api/v1/todos')
      .then((res) => dispatch(fetchTodosSuccess(res.data)))
      .catch((err) => new Error(err));
  } catch (e) {
    throw new Error(e);
  }
};
