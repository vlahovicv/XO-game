import games from '../apis/games'
import io from 'socket.io-client'


const socket = io.connect('http://localhost:3001', {
    withCredentials: true,
    transport: ['websocket', 'polling', 'flashsocket']
})

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export const fetchGames = () => {
    return async (dispatch) => {
        const response = await games.get('/lobbies')
        dispatch({ type: 'FETCH_GAMES', payload: response.data })
    }
}
export const createGame = () => {
    return async (dispatch) => {
        const response = await games.post('/new')
        dispatch({ type: 'CREATE_GAME', payload: response.data })
    }
}
export const sendMessage = (name, message) => {
    socket.emit('message', {name, message})
    return { type: 'SEND_MESSAGE', payload: {message: message, name: name}}
}
export const reciveMessage = () =>{
    return async (dispatch) => {
        await socket.on('message', ({name, message}) => {
             dispatch({ type: 'RECIVE_MESSAGE', payload: {message: message, name: name}})
        })
    }
}
// export const createLobby = (userId, lobbyId) => {
//     socket.emit('lobby', {userId, lobbyId})
//     return { type: 'CREATE_LOBBY', payload: {userId: userId}}
// }
// export const reciveLobbyId = () =>{
//     return async (dispatch) => {
//         await socket.on('lobby', ({ lobbyId, userId}) => {
//              dispatch({ type: 'RECIVE_LOBBY_ID', payload: {lobbyId: lobbyId, userId: userId}})
//         })
//     }
// }
// export const sendMove = (history) => {
//     socket.emit('move', {history})
//     return { type: 'SEND_MOVE', payload: {history: history}}
// }
// export const reciveMove = () =>{
//     return async (dispatch) => {
//         await socket.on('move', ({history}) => {
//              dispatch({ type: 'RECIVE_MOVE', payload: {history: history}})
//         })
//     }
// }
