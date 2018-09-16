let initialState = {
  todo: []
};

function todos(state =initialState.todo, action) {
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

    case 'DELETE_TODO':
    debugger;
    return state.filter(item => {
      item.id != action.id;
    })

    default:
    return state;
  }
}

export default todos;

