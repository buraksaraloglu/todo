import { useEffect } from 'react';
import axios from 'axios';

import { toggleTodo } from '../redux/actions';

const useUpdateTodo = ({ todo, status }) => {
  useEffect(() => {
    const timer =
      todo &&
      setTimeout(() => {
        axios
          .put(`/api/v1/todos/${todo.id}`, { ...todo, status })
          .then(() => {
            toggleTodo(todo.id);
          })
          .catch(() => null);
        return null;
      }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [status, todo]);
};

export default useUpdateTodo;
