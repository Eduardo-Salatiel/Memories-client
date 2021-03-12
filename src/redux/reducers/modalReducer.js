import { CLOSE_MODAL, OPEN_MODAL } from "../types/types";

const initialState = {
    visible: false
}

export const modalReducer = (state= initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                visible: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                visible: false
            }
    
        default:
            return state;
    }
}