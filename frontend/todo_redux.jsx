import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store.js';
import Root from './components/root.jsx';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  ReactDOM.render(<Root store={store} />, content);

});

import { receiveTodos, receiveTodo } from './actions/todos_action.js';
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

import { allTodos } from './reducers/selectors.js';
window.allTodos = allTodos;
