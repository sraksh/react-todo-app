import React, { Component }  from 'react';

class TodosFooter extends Component {
  
  render() {
    return (
      <footer>
          <ul className="row btn-group">
          <button type="button" className="btn btn-secondary" onClick={()=> this.props.filterTodo('All')}> All </button>
          <button type="button" className="btn btn-secondary" onClick={()=> this.props.filterTodo('Active')}> Active </button>
          <button type="button" className="btn btn-secondary" onClick={()=> this.props.filterTodo('Completed')}> Completed </button>
         </ul>
      </footer>
    );
  }
}
export default TodosFooter;