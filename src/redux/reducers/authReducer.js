import { AUTH_ERROR, LOGIN, LOGOUT, REGISTER } from "../types/types";

const initialState = {
    uid: null,
    checking: false,
    logged: false,
    name: null,
    email: null,
    error: {
        status: false,
        msg: ''
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                uid: action.payload.uid,
                logged: true,
                name: action.payload.email,
                email: action.payload.email,
                error: {
                    status: false,
                    msg: ''
                }
            }
        case LOGIN:
            return {
                ...state,
                uid: action.payload.uid,
                logged: true,
                name: action.payload.name,
                email: action.payload.email,
                error: {
                    status: false,
                    msg: ''
                }
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: {
                    status: true,
                    msg: action.payload
                }
            }
        case LOGOUT: 
            return initialState
    
        default:
            return state;
    }
}