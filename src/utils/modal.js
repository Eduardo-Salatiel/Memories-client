
export const cerrarModal = (dispatch, closeModal) => {
    window.onscroll = null;
    dispatch(closeModal());
}