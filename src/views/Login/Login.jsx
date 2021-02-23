
import Slide from "../../components/Slide/Slide";
import { images } from "./../../consts/slideImages";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./style.scss";

const Login = () => {

  return (
    <div className="login-container">
      <div className="login-left-child">
        <h1 className="login-main-title">Memories</h1>
        <LoginForm />
      </div>
      <div className="login-right-child">
        <Slide images={images} />
      </div>
    </div>
  );
};

export default Login;
