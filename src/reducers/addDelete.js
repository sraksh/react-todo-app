// let initialState = {
//   todo: []
// };

function addTodo(state =[], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          term: action.term,
          isCompleted: false,
          id: action.id
        }
      ]
    default:
    return state;
  }
}

export default addTodo;

