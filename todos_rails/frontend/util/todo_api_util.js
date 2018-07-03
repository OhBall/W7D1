export const fetchTodos = () => {
  return $.ajax({
    url: "/api/todos",
    method: "GET"
  });
};

export const createTodo = (todo) => {
  return $.ajax({
    url: "/api/todos",
    method: "POST",
    data: {
      todo: todo
    }
  });
};

export const removeTodo = (todo) => {
  return $.ajax({
    url:`/api/todos/${todo.id}`,
    method: "DELETE"
  });
};
