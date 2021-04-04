import { GET_POST, NEW_POST, SEARCHING } from "../types/types";

const initialState = {
  newPost: null,
  searching: false,
  posts: [],
  pages: 0,
  selectedPost: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING:
      return {
        ...state,
        searching: true,
      };
    case GET_POST:
      return {
        ...state,
        posts: action.payload.postMessage,
        pages: action.payload.pages,
        searching: false,
      };
    case NEW_POST:
      return {
        ...state,
        newPost: action.payload,
      };
    default:
      return state;
  }
};
