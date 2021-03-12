import { SHOW_POST_FORM } from "../types/types";

const initialState = {
    showPostForm: false
}

export const stylesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_POST_FORM:
            return {
                ...state,
                showPostForm: !state.showPostForm,
            }
    
        default:
            return state;
    }
}