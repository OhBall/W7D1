import React from 'react';
import ReactDOM from 'react-dom';
import { merge } from 'lodash';
export default (props) => {

  const handleClick = (type) => {
    if (type === 'delete') {
      return (e) => {
        props.removeTodo(props.todo);
      };
    } else {
      const updatedTodo = merge({}, props.todo, {done: !props.todo.done});
      return (e) => {
        props.updateTodo(updatedTodo);
      };
    }
  };


  return (
      <li>
        {props.todo.title}
        <button onClick={handleClick('delete')}>Delete Todo</button>
        <button onClick={handleClick('update')}>{props.done ? 'Undo' : 'Done'}</button>
      </li>
  );
};
