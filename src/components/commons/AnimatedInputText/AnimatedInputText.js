import { Fragment, useRef } from "react";
import errorIcon from './../../../assets/img/icons/cancelar.svg';

import "./style.scss";

const AnimatedInputText = ({ name, type, value, handleChange, blur, placeHolder, error, last }) => {
  const input = useRef();

  const handleBlur = (e) => {
    if (e.target.value.trim() === "") {
      input.current.previousElementSibling.classList.remove("top");
    }
    input.current.parentElement.classList.remove("focus");
    input.current.previousElementSibling.classList.remove("focus");
    
    blur(e);
  };

  const handleFocus = () => {
    input.current.parentElement.classList.add("focus");
    input.current.previousElementSibling.classList.add("focus");
    input.current.previousElementSibling.classList.add("top");
  };

  return (
    <Fragment>
      <label className={last ? "animated-input-text last" : "animated-input-text"}>
        <span>{placeHolder}</span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={input}
        />
        {error ? (
        <img className="error-icon" src={errorIcon} alt="input-error" />
      ) : null}
      </label>
    </Fragment>
  );
};

export default AnimatedInputText;
