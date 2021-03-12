import { Fragment, useRef } from "react";
import errorIcon from "./../../../assets/img/icons/cancelar.svg";

import "./style.scss";

const AnimatedTextarea = ({ name, value, handleChange, blur, placeHolder, error}) => {
  const textarea = useRef();

  const handleBlur = (e) => {
    if (e.target.value.trim() === "") {
      textarea.current.previousElementSibling.classList.remove("top");
    }
    textarea.current.parentElement.classList.remove("focus");
    textarea.current.previousElementSibling.classList.remove("focus");

    blur(e);
  };

  const handleFocus = () => {
    textarea.current.parentElement.classList.add("focus");
    textarea.current.previousElementSibling.classList.add("focus");
    textarea.current.previousElementSibling.classList.add("top");
  };

  return (
    <Fragment>
      <label htmlFor="" className="animated-textarea">
        <span>{placeHolder}</span>
        <textarea
          name={name}
          cols="30"
          rows="5"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          ref={textarea}
        ></textarea>
        {error ? (
          <img className="error-icon" src={errorIcon} alt="input-error" />
        ) : null}
      </label>
    </Fragment>
  );
};

export default AnimatedTextarea;
