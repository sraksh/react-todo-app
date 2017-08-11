import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosListHeader from './todos-list-header';
import TodosList from './todos-list';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todo: []
    }
  }
  addTodo=(term) => {
    this.setState({
      todo: [...this.state.todo, {term, isCompleted: false}],
    })
  }
  deleteTodo=(term) => {
    var todo = this.state.todo.slice(0);
    todo.push(term);
    this.setState({
      todo,
      isCompleted: false
    })
  }

  render() {
    return (
      <div>
      <TodosListHeader />
      <CreateTodo addTodo={this.addTodo} />
      <TodosList todoListItems={this.state.todo} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}
export default App;