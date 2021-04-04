import axios from "axios";
import { toast } from 'react-toastify';
import { CHECKING, FAILED_AUTH, LOGIN, LOGOUT, REGISTER, RENEW_TOKEN } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

//REGISTER
export const register = (data) => async (dispatch) => {
  dispatch({type: CHECKING})
  try {
    const resp = await axios({
      url: `${baseUrl}/auth/register`,
      method: "POST",
      data: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (resp.data.ok) {
      localStorage.setItem("token", resp.data.token);
      dispatch({
        type: REGISTER,
        payload: resp.data.usuario,
      });
    }
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({
      type: FAILED_AUTH
    })
  }
};

//LOGIN
export const login = (data) => async (dispatch) => {
  const { remember, email } = data;
  dispatch({type: CHECKING})
  try {
    const resp = await axios({
      url: `${baseUrl}/auth/login`,
      method: "POST",
      data: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    //PETICION EXITOSA
    if (resp.data.ok) {
      remember && localStorage.setItem("email", email);
      localStorage.setItem("token", resp.data.token);
      dispatch({
        type: LOGIN,
        payload: resp.data.usuario,
      });
    }
  } catch (error) {
    toast.error(error.response.data.error);
    dispatch({
      type: FAILED_AUTH
    })
  }
};

export const renewToken = (token) => async(dispatch) => {
    dispatch({type: CHECKING})
    try {
      const resp = await axios({
        url: `${baseUrl}/auth/renew`,
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Authorization": token
        },
      });
      localStorage.setItem('token', resp.data.token);
      dispatch({
        type: RENEW_TOKEN,
        payload: resp.data.usuario,
      });
    } catch (error) {
      localStorage.removeItem('token');
      dispatch({type: FAILED_AUTH})
    }
  };


export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({type: LOGOUT})
}