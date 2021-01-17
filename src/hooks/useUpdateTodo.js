import { useEffect } from 'react';
import axios from 'axios';

const useUpdateTodo = (todo, completed, status, setStatus, toggleTodo) => {
  useEffect(() => {
    const timer =
      todo &&
      status === 'update' &&
      setTimeout(() => {
        axios
          .put(`https://bs-todo-server.herokuapp.com/api/v1/todos/${todo.id}`, {
            ...todo,
            completed,
          })
          .then(() => {
            toggleTodo(todo.id);
          })
          .catch(() => setStatus(null));
        setStatus(null);
      }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [completed, setStatus, status, todo, toggleTodo]);
};

export default useUpdateTodo;
