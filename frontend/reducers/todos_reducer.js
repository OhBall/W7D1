import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todos_action.js';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


// export default (state = initialState, action) => {
const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TODO:
      const { todo } = action;
      const copy = merge(newState, {[todo.id]: todo});
      return copy;

    case RECEIVE_TODOS:
      const { todos } = action;
      const newTodos = {};

      todos.forEach((todo) => {
        newTodos[todo.id] = todo;
      });

      return newTodos;
    case REMOVE_TODO:
      const filteredState = newState.todos.filter( (todo) =>
        todo.id != action.todo.id
      );
      return filteredState;
    default:
      return state;
  }
};

export default todosReducer;
