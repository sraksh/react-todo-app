import React, { Component }  from 'react';
import TodosListItem from './todos-list-item';

class TodosList extends Component {
  render() {
    var todoItems = this.props.todoListItems.map((item) => {
        return(
            <TodosListItem
            todoListItems={item}
            key={item.id}
            id={item.id}
            deleteCurrentTodo={this.props.deleteTodo}
            editTodo={this.props.editTodo}
            saveEditTodo={this.props.saveEditTodo}
            markCurrentTodo={this.props.markTodo}/>
        );
    });
    return (
          <ul className="list-group">
            {todoItems}
          </ul>
    );
  }
}
export default TodosList;