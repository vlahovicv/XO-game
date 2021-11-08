export const moveReducer = (state={}, action) => {
    switch (action.type) {
        case 'SEND_MOVE':
            return {history: action.payload.recivedHistory}
        case 'RECIVE_MOVE':
            return {history: action.payload.recivedHistory}
        default:
            return state
    }
}