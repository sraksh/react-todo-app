import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import CreateTodo from '../components/create-todo';
import TodosListHeader from '../components/todos-list-header';
import TodosList from '../components/todos-list';
import TodosFooter from '../components/todos-footer';

class App extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   todo: [],
    //   nowShowing: 'All'
    // }
  }
  addTodo=(term) => {
    this.props.actions.addTodo(term);
    // this.setState({
    //   todo: [...this.state.todo, {term, isCompleted: false, id: Math.floor(Math.random() * 2000)}],
    // })
  }
  // saveEditTodo=(id, val) =>{
  //   this.setState({
  //     todo : this.state.todo.map((item) => {if(id===item.id){item.term = val} return item})
  //   })
  // }
  // deleteTodo=(id) => {
  //   var todo = this.state.todo.filter((item) => {
  //     return item.id!==id;
  //   });
  //   this.setState({
  //     todo
  //   })
  // }
  // markTodo=(id) => {
  //   var todo = this.state.todo.map((item) => {
  //     if(item.id===id){
  //       item.isCompleted= !item.isCompleted;
  //     }
  //     return item;
  //   });
  //   this.setState({
  //     todo
  //   })
  // }
  // filterTodo=(str) => {
  //   this.setState({
  //       nowShowing: str
  //    })
  // }
  // renderTodoItems=() => {
  //   var str = this.state.nowShowing;
  //   if(str === 'Active') {
  //       return this.state.todo.slice(0).filter((item) => {
  //         if(item.isCompleted===false){
  //           return item;
  //         }
  //       });
  //     }
  //     else if(str === 'Completed') {
  //       return this.state.todo.slice(0).filter((item) => {
  //           if(item.isCompleted===true){
  //             return item;
  //           }
  //         });
  //     }
  //     else {
  //       return this.state.todo;
  //     }
  // }
  render() {
    // debugger;
    return (
      <div className="row">
      <TodosListHeader />
      <CreateTodo addTodo={this.addTodo} />
      <TodosList
        // todoListItems={this.renderTodoItems()}
        todoListItems={this.props.addTodo}
        // deleteTodo={this.deleteTodo}
        // markTodo={this.markTodo}
        // editTodo={this.editTodo}
        // saveEditTodo={this.saveEditTodo}
      />
      {/* <TodosFooter filterTodo={this.filterTodo} highlightTodo={this.state.nowShowing} /> */}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  addTodo: state.addTodo,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);