import React, { Component }  from 'react';

class TodosListItem extends Component {
  render() {
    return (
      <div>
        <li style={{textDecoration: this.props.todoListItems.isCompleted ? 'line-through' : 'none'}}>
        {this.props.todoListItems.term}
        </li>
        <button className="btn-delete" onClick={()=> this.props.deleteCurrentTodo(this.props.id)}>Delete</button>
        <button className="btn-done" onClick={()=> this.props.markCurrentTodo(this.props.id)}>{this.props.todoListItems.isCompleted ? 'Undo' : 'Done'}</button>
      </div>
    );
  }
}
export default TodosListItem;