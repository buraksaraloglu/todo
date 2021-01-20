# Todo App

Basic todo app built with MERN stack.

### Frontend

> Build with: `React`, `Redux`, `Redux Thunk`

### Important Specs

- Initial read request is handled by `Redux Thunk`.
- When all todos are fetched into Redux, future reads and updates are made through Redux.
- There is a client rate-limit on update. (ex: if client spams the checkbox, there is a time limit to handle the process).
- Used axios to handle API requests.

### Backend

> NodeJS, Express, MongoDB (MongoDB Atlas & connection with mongoose), ...

### Important Specs

> These specs are additions to CRUD operations.

- Made an in-memory cache that has 30 seconds of lifespan. After each `post`, `put` or `delete` request, cache's lifespan resets. That way, API response times reduced are down to ~5ms. _(if cache is available.)_
- Built a rate-limit middleware using `express-rate-limit`. Any client makes _100 requests per 30 seconds_, gets temporary IP ban.
- Built a rate-limit middleware using `express-slow-down`. After _50 requests in 30 seconds_, each request's response time gets slower +500ms.

## API Reference

API server's repo is [todo-server](https://github.com/buraksaraloglu/todo-server)

If everything set correctly, you should be able to hit a request to

```shell
localhost:6565/api/v1/todos
```

All CRUD operations are handled by this router.

## Other Details

You can check backend repo at: [todo-server](https://github.com/buraksaraloglu/todo-server)
