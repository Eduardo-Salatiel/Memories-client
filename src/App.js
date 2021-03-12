import { useSelector } from "react-redux";
import Modal from "./components/commons/Modal/Modal";
import Routes from "./routes/Routes";


function App() {
  const modalState = useSelector(state => state.modalReducer)

  return (
    <>
    <Routes />
    {modalState.visible === true ? <Modal /> : null}
    </>
  );
}

export default App;
