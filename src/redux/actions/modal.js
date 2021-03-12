import { CLOSE_MODAL, OPEN_MODAL } from "../types/types";

//ABRIR MODAL
export const openModal = () => (dispatch) => dispatch({type: OPEN_MODAL});

//CERRAR MODAL
export const closeModal = () => (dispatch) => {
    dispatch({type: CLOSE_MODAL})
}