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
    this.props.actions.enteredTerm(event.target.value);
    this.setState({
      term: event.target.value
    })
  }
  onAddSubmit=(event) =>{
    event.preventDefault();
    var term = ReactDOM.findDOMNode(this.refs.jsTodoValue).value;
    this.props.addTodo(term);
    // this.props.actions.addTodo(term);
    // this.setState({
    //   term: ''
    // });
  }
  render() {
    return (
      <form className="input-group add-todo" onSubmit={this.onAddSubmit} >
        <input className="form-control input-lg" type="text" placeholder="Add todo" ref="jsTodoValue" value={this.state.term} onChange={this.onTermChange} />
        <span className="input-group-btn">
         <input type="submit" className="btn btn-primary btn-lg" value="Add +" />
        </span>
      </form>
    );
  }
}
export default CreateTodo;