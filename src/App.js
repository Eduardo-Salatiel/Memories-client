import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';

import Modal from "./components/commons/Modal/Modal";
import { renewToken } from "./redux/actions/auth";
import Routes from "./routes/Routes";


function App() {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modalReducer);
  const { checking } = useSelector(state => state.authReducer);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(renewToken(token))
    }
  }, []);

  if(checking) return null;

  return (
    <>
    <Routes />
    <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar
      rtl={false}
      newestOnTop
      pauseOnFocusLoss
      closeOnClick
      draggable
      pauseOnHover
    />
    {modalState.visible === true ? <Modal /> : null}
    </>
  );
}

export default App;
