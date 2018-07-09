// State argument is not application state, only the state
// thi reducer is repsonsible for
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    
        default:
            break;
    }

    return state;
}