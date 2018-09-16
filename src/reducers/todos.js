let initialState = [];

function todos(state = initialState, action) {
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
    return state.filter(item => item.id !== action.id);

    default:
    return state;
  }
}

export default todos;

