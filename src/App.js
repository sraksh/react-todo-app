import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosListHeader from './todos-list-header';
import TodosList from './todos-list';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      isCompleted: null
    }
  }
  addTodo(term) {
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
        <CreateTodo addTodo={this.addTodo.bind(this)} />
        <TodosList todoListItems={this.state.todo} />
        </div>
    )
  }
}
export default App;