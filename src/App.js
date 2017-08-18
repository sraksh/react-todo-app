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
  deleteTodo=(id) => {
    var todo = this.state.todo.filter((item,index) => {
      return index!==id;
    });
    this.setState({
      todo
    })
  }
  markTodo=(id) => {
    var todo = this.state.todo.map((item,index) => {
      if(index===id){
        item.isCompleted= !item.isCompleted;
      }
      return item;
    });
    this.setState({
      todo
    })
  }
  editTodo=(term,id) => {
  //   this.setState({
  //     todo: [...this.state.todo, {term, isCompleted: false}],
  //   })
  }

  render() {
    return (
      <div>
      <TodosListHeader />
      <CreateTodo addTodo={this.addTodo} />
      <TodosList
      todoListItems={this.state.todo}
      deleteTodo={this.deleteTodo}
      markTodo={this.markTodo}
      editTodo={this.editTodo}
      />
      </div>
    )
  }
}
export default App;