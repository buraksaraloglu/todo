## Todo App - Frontend

It's a todo app built with React.

### Important Specs

- Initial read request is handled by `Redux Thunk`.
- When all todos are fetched into Redux, future reads and updates are made through Redux.
- There is a client rate-limit on update. (ex: if client spams the checkbox, there is a time limit to handle the process.)
- Used proxy in React app to handle API requests by same domain (ex: backend is on port `5000` but you can call `localhost:3000/api/v1/todos`)
- Used axios to handle API requests.
