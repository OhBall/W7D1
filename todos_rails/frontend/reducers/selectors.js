
export const allTodos = (state) => {
  const todoKeys = Object.keys(state.todos);
  const todos = todoKeys.map((key) => {
    return state.todos[key];
  });
  return todos;
};
