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
      <div>
      <TodosListHeader />
      <CreateTodo addTodo={this.addTodo} />
      <TodosList
        todoListItems={this.renderTodoItems()}
        deleteTodo={this.deleteTodo}
        markTodo={this.markTodo}
      />
      <TodosFooter filterTodo={this.filterTodo} highlightTodo={this.state.nowShowing} />
      </div>
    )
  }
}
export default App;