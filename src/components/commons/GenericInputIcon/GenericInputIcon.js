import errorIcon from "./../../../assets/img/icons/cancelar.svg";

import "./style.scss";

const GenericInputIcon = ({
  type,
  name,
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
  last
}) => {
  return (
    <div className={last ? "generic-input-icon last" : "generic-input-icon"}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        autoComplete="off"
      />
      {error ? (
        <img className="error-icon" src={errorIcon} alt="input-error" />
      ) : null}
    </div>
  );
};

export default GenericInputIcon;
