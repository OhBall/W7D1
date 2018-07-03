import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { receiveTodo, receiveTodos, fetchTodos, createTodo, removeTodo } from '../../actions/todos_action';
import { receiveErrors, clearErrors } from '../../actions/error_actions';
import { allTodos, allErrors } from '../../reducers/selectors';
import TodoList from './todo-list';

const mapStateToProps = state => {
  return {
    todos: allTodos(state),
    errors: allErrors(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // receiveTodo: (todo) => {dispatch(receiveTodo(todo));},
    fetchTodos: () => {dispatch(fetchTodos());},
    createTodo: (todo) => {dispatch(createTodo(todo));},
    removeTodo: (todo) => {dispatch(removeTodo(todo));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
