import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import GenericInputIcon from "../commons/GenericInputIcon";

import { register } from './../../redux/actions/auth';

import "./style.scss";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().required().email(),
            password: Yup.string().required()
        }),
        onSubmit: () => {
            dispatch(register(formik.values));
        }
    })

  return (
    <form className="register-form" onSubmit={formik.handleSubmit}>
      <span className="register-description">
        Registrate y comparte maravillosos momentos
      </span>
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
        placeholder="Nombre de usuario" 
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
      />
      <button type="submit" className="register-form-button">
        Registrarte
      </button>
    </form>
  );
};

export default RegisterForm;
