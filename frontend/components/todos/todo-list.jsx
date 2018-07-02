import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
// import { receiveTodo } from '../../actions/todos_action';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos;
    const todoItems = todos.map( (todo) => {
      return (
        <TodoListItem key={todo.id} todo={todo}/>
        );
    });
    return (
      <section>
        <ul>
          {todoItems}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </section>
    );
  }
}

export default TodoList;
