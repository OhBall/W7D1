import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
// import { receiveTodo } from '../../actions/todos_action';

class TodoList extends React.Component {
  componentDidMount(){
    this.props.fetchTodos();
  }

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
        <TodoForm createTodo={this.props.createTodo}/>
      </section>
    );
  }
}

export default TodoList;
