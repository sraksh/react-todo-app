import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

class TodosListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditable: false
    }
  }
  saveEditedTodo=()=> {
    var editTerm = ReactDOM.findDOMNode(this.refs.newText).value;
    this.setState({
      isEditable: false
    })
    this.props.saveEditTodo(this.props.id, editTerm);
  }
   editTodo=() =>{
    this.setState({
      isEditable: true
    })
  }
  render() {
    if(this.state.isEditable) {
      return (
        <div>
          <li  className="list-group-item" style={{textDecoration: this.props.todoListItems.isCompleted ? 'line-through' : 'none'}}>
          <div className="input-group">
            <input className="form-control input-sm" type="text" placeholder="Edit todo" ref="newText" defaultValue={this.props.todoListItems.term} />
              <span className="input-group-btn">
                <input type="button" className="btn btn-outline-primary" style={{float: 'right'}} onClick={this.saveEditedTodo} value="Save" />
              </span>
          </div>
          </li>
        </div>
      );
    }
    else {
      return (
        <div>
          <li className="list-group-item" style={{textDecoration: this.props.todoListItems.isCompleted ? 'line-through' : 'none'}}>
            {this.props.todoListItems.term}
            <button className="btn btn-outline-primary" style={{float: 'right'}} onClick={this.editTodo}> Edit </button>
            <button className="btn btn-outline-danger" style={{float: 'right'}} onClick={()=> this.props.deleteCurrentTodo(this.props.id)}>Delete</button>
            <button className="btn btn-outline-success" style={{float: 'right'}} onClick={()=> this.props.markCurrentTodo(this.props.id)}>{this.props.todoListItems.isCompleted ? 'Undo' : 'Done'}</button>
          </li>
        </div>
      );
    }
  }
}
export default TodosListItem;