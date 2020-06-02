
const reducer = (state=[],action) =>{
    switch (action.type) {
        case 'ADDPOST':
          return [...state, action.payload]
        case 'DELETEPOST':
          return [...state].filter(e => e.id !== action.payload)
        case 'EDITPOST':
            let post = state.find(e => e.id == action.payload.id)
            post = action.payload
            return [...state, post]
        default:
          return state
      }
}
export default reducer
// const Store = createStore(reducer)