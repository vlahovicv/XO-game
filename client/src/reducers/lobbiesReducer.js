export const lobbiesReducer = (state={}, action) => {
    switch (action.type) {
        case 'CREATE_LOBBY':
            return {userId: action.payload.userId, lobbyId: action.payload.lobbyId}
        case 'RECIVE_LOBBY_ID':
            return {userId: action.payload.userId, lobbyId: action.payload.lobbyId}
        default:
            return state
    }
}