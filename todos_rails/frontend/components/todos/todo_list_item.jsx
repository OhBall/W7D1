import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {

  const handleClick = () => {
    return (e) => {

       props.removeTodo(props.todo);
    };
  };

  return (
      <li>
        {props.todo.title}
        <button onClick={handleClick()}>Delete Todo</button>
      </li>
  );
};
