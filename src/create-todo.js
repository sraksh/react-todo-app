import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class CreateTodo extends Component{ 
  constructor(props) {
    super();
    this.state = {
      term : ''
    };
  }
  onTermChange=(event)=> {
    this.setState({
      term: event.target.value
    })
  }
  onAddSubmit=(event) =>{
    event.preventDefault();
    var term = ReactDOM.findDOMNode(this.refs.jsTodoValue).value;
    this.props.addTodo(term);
    this.setState({
      term: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.onAddSubmit} >
        <input type="text" placeholder="Add todo" ref="jsTodoValue" value={this.state.term} onChange={this.onTermChange} />
        <input type="submit" value="Add +" />
      </form>
    );
  }
}
export default CreateTodo;