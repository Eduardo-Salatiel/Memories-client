import { images } from "./../../consts/slideImages";
import Slide from "../../components/Slide/Slide";
import RegisterForm from "../../components/RegisterForm";
import "./style.scss";

const Register = () => {
  return (
    <div className="register-container">
        <div className="register-left-child">
          <h1 className="register-main-title">Memories</h1>
          <RegisterForm />
        </div>
        <div className="register-right-child">
          <div>
            <Slide images={images} />
          </div>
        </div>
    </div>
  );
};

export default Register;
