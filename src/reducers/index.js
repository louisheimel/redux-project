const initialState = ['buy milk', 'go to the movies', 'configure webpack'].map(todo => ({todo: todo, complete: false}))
export default (state = initialState, action) => {
  switch(action.type) {
    case 'add todo':
      break
    default:
      return state
  }
}
