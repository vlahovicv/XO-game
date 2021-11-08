const INITAL_STATE = {
    message: 'test',
    name: 'test user'
}

export const chatReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {...state, message: action.payload.message, name: action.payload.name}
        case 'RECIVE_MESSAGE':
            return { message: action.payload.message, name: action.payload.name}
        default:
            return state
    }
}