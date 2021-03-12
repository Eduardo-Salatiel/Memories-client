import axios from "axios";
import { AUTH_ERROR, LOGIN, LOGOUT, REGISTER } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

//REGISTER
export const register = (data) => async (dispatch) => {
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
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.error
    });
  }
};

//LOGIN
export const login = (data) => async (dispatch) => {
  const { remember, email } = data;
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
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.error
    })
  }
};


export const logout = () => (dispatch) => dispatch({type: LOGOUT})