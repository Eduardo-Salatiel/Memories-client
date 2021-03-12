import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { postsReducer } from './postsReducer';
import { stylesReducer } from './stylesReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
    authReducer,
    postsReducer,
    stylesReducer,
    modalReducer
});