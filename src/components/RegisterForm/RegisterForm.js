import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { register } from "./../../redux/actions/auth";
import GenericInputIcon from "../commons/GenericInputIcon";
import "./style.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { checking } = useSelector((state) => state.authReducer);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required(),
    }),
    onSubmit: () => {
      dispatch(register(formik.values));
      formik.resetForm();
    },
  });

  return (
    <form className="register-form" onSubmit={formik.handleSubmit}>
      <p className="register-description">
        Registrate y comparte maravillosos momentos
      </p>
      <GenericInputIcon
        type="text"
        name="name"
        placeholder="Nombre completo"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name ? true : false}
      />
      <GenericInputIcon
        type="text"
        name="email"
        placeholder="Correo"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email ? true : false}
      />
      <GenericInputIcon
        type="password"
        name="password"
        placeholder="Contraseña"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && formik.errors.password ? true : false}
        last={true}
      />
      <Link to="/login" className="register-actions-login">
        ¿Ya tienes cuenta? Inicia sesión
      </Link>
      <button type="submit" className="register-form-button">
        {!checking ? (
          "Registrarte"
        ) : (
          <i className="fas fa-circle-notch fa-spin" />
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
