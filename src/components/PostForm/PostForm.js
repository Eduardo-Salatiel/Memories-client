import { useRef } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import AnimatedInputText from "../commons/AnimatedInputText/AnimatedInputText";
import AnimatedTextarea from "../commons/AnimatedTextarea/AnimatedTextarea";
import { addPost } from "../../redux/actions/posts";
import "./style.scss";

const PostForm = () => {
  const inputFileRef = useRef();
  const inputLabelRef = useRef();
  const dispatch = useDispatch();
  const styleState = useSelector((state) => state.stylesReducer);

  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
      selectedFile: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("El titulo es requerido"),
      message: Yup.string().required("la descripcion es requerida"),
    }),
    onSubmit: () => {
      dispatch(addPost(formik.values));
      formik.resetForm();
      inputLabelRef.current.classList.remove("loaded");
    },
  });

  const handleFileChange = () => {
    formik.values.selectedFile = inputFileRef.current.files[0];
    if (inputFileRef.current.value !== "") {
      inputLabelRef.current.classList.add("loaded");
    }
  };

  return (
    <div className={ styleState.showPostForm ? "post-form show" : "post-form"}>
      <h3 className="post-form-title">Agregar Memorie</h3>
      <form className="post-form-container" onSubmit={formik.handleSubmit}>
        <AnimatedInputText
          type="text"
          name="title"
          placeHolder="Titulo"
          handleChange={formik.handleChange}
          blur={formik.handleBlur}
          value={formik.values.title}
          error={formik.touched.title && formik.errors.title ? true : false}
        />
        <AnimatedTextarea
          placeHolder="Descripción"
          name="message"
          handleChange={formik.handleChange}
          blur={formik.handleBlur}
          value={formik.values.message}
          error={formik.touched.message && formik.errors.message ? true : false}
        />
        <input
          type="file"
          id="post-form-file"
          ref={inputFileRef}
          onChange={handleFileChange}
        />
        <label
          htmlFor="post-form-file"
          className="post-form-file"
          ref={inputLabelRef}
        >
          Subir foto
        </label>
        <button type="submit" className="submit">
          AGREGAR
        </button>
        <button
          type="reset"
          className="clear"
          onClick={() => {
            formik.handleReset();
            inputFileRef.current.value = "";
            inputLabelRef.current.classList.remove("loaded");
          }}
        >
          LIMPIAR
        </button>
      </form>
    </div>
  );
};

export default PostForm;
