import logo from './../../assets/img/logos/large-logo.png';

import Slide from "../../components/Slide/Slide";
import { imagesLogin } from "./../../consts/slideImages";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./style.scss";

const Login = () => {

  return (
    <div className="login-container">
      <div className="login-left-child">
        <img className="login-logo" src={logo} alt="memories-logo"/>
        <LoginForm />
      </div>
      <div className="login-right-child">
        <Slide images={imagesLogin} />
      </div>
    </div>
  );
};

export default Login;
