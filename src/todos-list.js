import React, { Component }  from 'react';
import TodosListItem from './todos-list-item';

class TodosList extends Component {
  render() {
    var todoItems = this.props.todoListItems.map((item,index) => {
        return(
            <TodosListItem
            todoListItems={item}
            key={index}
            id={index}
            deleteCurrentTodo={this.props.deleteTodo}
            markCurrentTodo={this.props.markTodo}/>
        );
    });
    return (
        <ul>
          {todoItems}
        </ul>
    );
  }
}
export default TodosList;