import React, { Component }  from 'react';

class TodosListItem extends Component {
  //  constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <li>
       {this.props.todoListItems.term}
      </li>
    );
  }
}
export default TodosListItem;