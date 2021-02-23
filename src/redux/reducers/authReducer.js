import { LOGIN, REGISTER } from "../types/types";

const initialState = {
    uid: null,
    checking: false,
    logged: false,
    name: null,
    email: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                uid: action.payload.uid,
                logged: true,
                name: action.payload.email,
                email: action.payload.email
            }
        case LOGIN:
            return {
                ...state,
                uid: action.payload.uid,
                logged: true,
                name: action.payload.email,
                email: action.payload.email
            }
    
        default:
            return state;
    }
}