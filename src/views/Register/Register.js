import { imagesRegister } from "./../../consts/slideImages";
import logo from './../../assets/img/logos/large-logo.png';

import Slide from "../../components/Slide/Slide";
import RegisterForm from "../../components/RegisterForm";
import "./style.scss";

const Register = () => {
  return (
    <div className="register-container">
        <div className="register-left-child">
        <img className="register-logo" src={logo} alt="memories-logo"/>
          <RegisterForm />
        </div>
        <div className="register-right-child">
          <div>
            <Slide images={imagesRegister} />
          </div>
        </div>
    </div>
  );
};

export default Register;
