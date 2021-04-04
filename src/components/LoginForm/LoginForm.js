import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import AnimatedInputText from "../commons/AnimatedInputText/AnimatedInputText";
import "./style.scss";
import { login } from "../../redux/actions/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { checking } = useSelector((state) => state.authReducer);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().required(true).email(),
      password: Yup.string().required(true),
    }),
    onSubmit: () => {
      dispatch(login(formik.values));
      formik.resetForm();
    },
  });

  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <p className="login-description">¡Por que recordar es volver a vivir!</p>
      <AnimatedInputText
        type="text"
        name="email"
        placeHolder="Correo"
        handleChange={formik.handleChange}
        blur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email ? true : false}
      />
      <AnimatedInputText
        type="password"
        name="password"
        placeHolder="Contraseña"
        handleChange={formik.handleChange}
        blur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && formik.errors.password ? true : false}
        last={true}
      />
      <div className="login-actions-container">
        <label>
          <input
            type="checkbox"
            name="remember"
            onChange={formik.handleChange}
            value={formik.values.remember}
          />
          <span className="login-actions-checkbox">Recuerdame</span>
        </label>
        <Link to="/register" className="login-actions-register">
          Crea una cuenta
        </Link>
      </div>
      <button type="submit" className="login-form-button">
        {!checking ? (
          "Iniciar sesión"
        ) : (
          <i className="fas fa-circle-notch fa-spin" />
        )}
      </button>
    </form>
  );
};

export default LoginForm;
