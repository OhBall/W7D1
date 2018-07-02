import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { receiveTodo, receiveTodos } from '../../actions/todos_action';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo-list';

const mapStateToProps = state => {
  return {
    todos: allTodos(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveTodo: (todo) => {dispatch(receiveTodo(todo));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);