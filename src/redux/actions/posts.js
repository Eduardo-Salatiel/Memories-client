import axios from "axios";
import { toast } from 'react-toastify';
import { GET_POST, NEW_POST, OPEN_MODAL, SEARCHING} from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

//AGREGA UN NUEVO POST
export const addPost = (body) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", body.title);
    formData.append("message", body.message);
    formData.append("selectedFile", body.selectedFile);

    const res = await axios({
      url: `${baseUrl}/post/new-post`,
      method: "POST",
      data: formData,
      headers: {
        Authorization: token,
      },
    });
    dispatch({
      type: NEW_POST,
      payload: res.data.nuevoPost
    })
    dispatch({type: OPEN_MODAL})
  } catch (error) {
    toast.error(error.response.data.error);
  }
};

//OBTENER TODOS LOS POSTS
export const getPost = (limit = 12,skipt = 0 ) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type: SEARCHING})
  try {
    const res = await axios({
      url: `${baseUrl}/post/get-post?limit=${limit}&skipt=${skipt}`,
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
