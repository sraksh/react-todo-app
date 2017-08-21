import React, { Component }  from 'react';

class TodosFooter extends Component {
  
  render() {
    return (
      <footer>
        <ul>
          <span onClick={()=> this.props.filterTodo('All')}> All </span>
          <span onClick={()=> this.props.filterTodo('Active')}> Active </span>
          <span onClick={()=> this.props.filterTodo('Completed')}> Completed </span>
        </ul>
      </footer>
    );
  }
}
export default TodosFooter;