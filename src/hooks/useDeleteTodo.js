import { useEffect } from 'react';
import axios from 'axios';

const useDeleteTodo = (todo, completed, status, setStatus, deleteTodo) => {
  useEffect(() => {
    if (todo && status === 'delete') {
      axios.delete(`https://bs-todo-server.herokuapp.com/api/v1/todos/${todo.id}`).then((res) => {
        if (res.status === 200) {
          deleteTodo(todo.id);
        }
      });
      setStatus(null);
    }
  }, [completed, deleteTodo, setStatus, status, todo]);
};

export default useDeleteTodo;
