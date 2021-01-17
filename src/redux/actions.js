import axios from 'axios';
import { ADD_TODO, FETCH_TODOS_SUCCESS, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './actionTypes';

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    ...content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({ type: SET_FILTER, payload: { filter } });

const fetchTodosSuccess = (content) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: {
    content,
  },
});

export const fetchTodos = () => async (dispatch) => {
  try {
    const statusPromise = await axios
      .get('/api/v1/todos')
      .then((res) => {
        dispatch(fetchTodosSuccess(res.data));
        return 'resolved';
      })
      .catch((err) => err);

    return statusPromise;
  } catch (e) {
    throw new Error(e);
  }
};
