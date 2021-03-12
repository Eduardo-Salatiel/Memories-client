import { GET_POST, NEW_POST, POST_ERROR } from "../types/types";

const initialState = {
  selectedPost: [],
  newPost: null,
  pages: 0,
  posts: [],
  error: {
    status: false,
    msg: "",
  },
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload.postMessage,
        pages: action.payload.pages
      };
    case NEW_POST:
      return {
        ...state,
        newPost: action.payload
      }
    case POST_ERROR:
      return {
        ...state,
        error: {
          status: true,
          msg: action.payload,
        },
      };

    default:
      return state;
  }
};
