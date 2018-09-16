
export const addTodo = (term, id) => ({
  type: 'ADD_TODO',
  term,
  id: Math.floor(Math.random() * 2000)
});


export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});