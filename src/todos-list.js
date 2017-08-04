import React, { Component }  from 'react';
import TodosListItem from './todos-list-item';

class TodosList extends Component {
    
    render() {
    console.log(this.props.todoListItems)
    return (
        <TodosListItem todoListItems={this.props.todoListItems} />
    );
  }
}
export default TodosList;