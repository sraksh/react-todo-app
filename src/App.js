import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosListHeader from './todos-list-header';
import TodosList from './todos-list';
import TodosFooter from './todos-footer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      nowShowing: 'All'
    }
  }
  addTodo=(term) => {
    this.setState({
      todo: [...this.state.todo, {term, isCompleted: false, id: Math.floor(Math.random() * 2000)}],
    })
  }
  saveEditTodo=(id, val) =>{
    this.setState({
      todo : this.state.todo.map((item) => {if(id===item.id){item.term = val} return item})
    })
  }
  deleteTodo=(id) => {
    var todo = this.state.todo.filter((item) => {
      return item.id!==id;
    });
    this.setState({
      todo
    })
  }
  markTodo=(id) => {
    var todo = this.state.todo.map((item) => {
      if(item.id===id){
        item.isCompleted= !item.isCompleted;
      }
      return item;
    });
    this.setState({
      todo
    })
  }
  filterTodo=(str) => {
    this.setState({
        nowShowing: str
     })
  }
  renderTodoItems=() => {
    var str = this.state.nowShowing;
    if(str === 'Active') {
        return this.state.todo.slice(0).filter((item) => {
          if(item.isCompleted===false){
            return item;
          }
        });
      }
      else if(str === 'Completed') {
        return this.state.todo.slice(0).filter((item) => {
            if(item.isCompleted===true){
              return item;
            }
          });
      }
      else {
        return this.state.todo;
      }
  }
  render() {
    return (
      <div className="row">
      <TodosListHeader />
      <CreateTodo addTodo={this.addTodo} />
      <TodosList
        todoListItems={this.renderTodoItems()}
        deleteTodo={this.deleteTodo}
        markTodo={this.markTodo}
        editTodo={this.editTodo}
        saveEditTodo={this.saveEditTodo}
      />
      <TodosFooter filterTodo={this.filterTodo} highlightTodo={this.state.nowShowing} />
      </div>
    )
  }
}
export default App;