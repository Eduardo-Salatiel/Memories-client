import apiCall from "../../api";
import { LOGIN, REGISTER } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

//REGISTER
export const register = (body) => async (dispatch) => {
 try {
  const resp = await apiCall({
    url: `${baseUrl}/auth/register`,
    method: "POST",
    body,
    headers: {
      "Content-type": "application/json",
    },
  });
  if (resp.ok) {
    localStorage.setItem('token', resp.token);
    dispatch({
      type: REGISTER,
      payload: resp.usuario,
    });
  }
 } catch (error) {
   
 }
};

//LOGIN
export const login = (body) => async (dispatch) => {
  const { remember, email } = body;
  try {
    const resp = await apiCall({
      url: `${baseUrl}/auth/login`,
      method: 'POST',
      body,
      headers: {
        'Content-type': 'application/json'
      }
    });
    //PETICION EXITOSA
    if (resp.ok) {
      remember && localStorage.setItem('email', email);
      localStorage.setItem('token', resp.token);
      dispatch({
        type: LOGIN,
        payload: resp.usuario
      });
    }

    console.log(resp);
  } catch (error) {
    
  }
}
