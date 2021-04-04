import { FAILED_AUTH, LOGIN, LOGOUT, REGISTER, RENEW_TOKEN, CHECKING } from "../types/types";

const initialState = {
    uid: null,
    checking: false,
    logged: null,
    name: null,
    email: null,
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
            }
        case LOGIN:
            return {
                ...state,
                uid: action.payload.uid,
                checking: false,
                logged: true,
                name: action.payload.name,
                email: action.payload.email,
            }
        case RENEW_TOKEN:
            return {
                ...state,
                uid: action.payload.uid,
                checking: false,
                logged: true,
                name: action.payload.name,
                email: action.payload.email

            }
        case CHECKING:
            return {
                ...state,
                checking: true
            }
        case FAILED_AUTH:
            return {
                initialState,
                logged: false
            }
        case LOGOUT: 
            return {
                initialState,
                logged: false
            }
    
        default:
            return state;
    }
}