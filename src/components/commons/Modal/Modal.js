import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";

import { closeModal } from "../../../redux/actions/modal";
import { cerrarModal } from './../../../utils/modal'
import NewPostModal from "../../CustomModals/NewPostModal/NewPostModal";
import "./style.scss";

function disableScroll() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
  document.getElementById("modalRef").style.top = `${y}px`;
}

const Modal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    disableScroll();
  }, []);

  const handleCloseClick = () => cerrarModal(dispatch, closeModal);

  return ReactDOM.createPortal(
    <div id="modalRef" className="modal">
      <div className="modal-content">
        <i className="far fa-times-circle fa-lg" onClick={handleCloseClick} />
        <NewPostModal />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
