import React from 'react';
import ReactDOM from 'react-dom';
import Util from '../../util/util';
import { merge } from 'lodash';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: (e.target.value)});
    };
  }

  submit(e){
    e.preventDefault();
    const dupState = merge({}, this.state);
    this.setState({
      title: "",
      body: "",
      done: false
    });
    this.props.createTodo(dupState);
  }

  render () {

      const list = [];
      this.props.errors.forEach( (error, idx) => {
        list.push(<li key={idx}>{error}</li>);
      });


    return (
      <form onSubmit={this.submit}>
        <ul>
          {list}
        </ul>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" onChange={this.update("title")} value={this.state.title}></input>
        <label htmlFor="body">Body</label>
        <input id="body" type="text" onChange={this.update("body")} value={this.state.body}></input>
        <input type="submit" value="Add ToDo"></input>
      </form>
    );
  }
}

export default TodoForm;
