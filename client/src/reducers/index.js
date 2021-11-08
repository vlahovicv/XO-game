import { combineReducers } from 'redux'
import { authReducer } from "./authReducer";
import { chatReducer } from './chatReducer';
import { lobbiesReducer } from './lobbiesReducer';
import { moveReducer } from './moveReducer';

export default combineReducers({
    auth: authReducer,
    chat: chatReducer,
    lobby: lobbiesReducer,
    move: moveReducer

})