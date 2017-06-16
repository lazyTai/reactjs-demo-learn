import _ from 'lodash'
export default  function todo(state = [], action) {
    var newState=_.cloneDeep(state)
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {content: action.todo.content}]
            break;
        case 'PUSHTODO':
            newState.push({content:action.todo.content})
            return newState
            break;
        default:
            return state;
    }
}