import React, { Component }  from 'react';

class TodosListItem extends Component {
   constructor(props) {
    super(props);
    this.generateTodo = this.generateTodo.bind(this);
  }
  generateTodo() {
    // console.log(this.props)
   return this.props.todoListItems.map(todoitems => {
    return (
        <li>{todoitems}</li>
      );
    });
  }
  render() {
    return (
      <ul>
       {this.generateTodo()}
      </ul>
    );
  }
}
export default TodosListItem;