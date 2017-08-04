import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class CreateTodo extends Component{ 
  constructor(props) {
    super();
    this.state = {
      term : ''
    };
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }
  onAddSubmit(event) {
    event.preventDefault();
    var term = ReactDOM.findDOMNode(this.refs.jsTodoValue).value;
    this.setState({
      term
    });
    this.props.addTodo(term);
  }
  render() {
    return (
      <form onSubmit={this.onAddSubmit} >
        <input type="text" placeholder="Add todo" ref="jsTodoValue"  />
        <input type="submit" value="Add +" />
      </form>
    );
  }
}
export default CreateTodo;