import * as ApiUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};


export const fetchTodos = () => {
  return dispatch => {
    return ApiUtil.fetchTodos().then(
      todos => dispatch(receiveTodos(todos))
    );
  };
};

export const removeTodo = (todo) =>{
  return dispatch => {
    return ApiUtil.removeTodo(todo).then(
      (todos) => {dispatch(receiveTodos(todos));}
    );
  };
};

export const createTodo = (todo) => {

  return dispatch => {

    return ApiUtil.createTodo(todo).then(
      todo => {
        dispatch(clearErrors());
        dispatch(receiveTodo(todo));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
