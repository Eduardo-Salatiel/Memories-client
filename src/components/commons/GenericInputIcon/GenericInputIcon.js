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
}) => {
  return (
    <div className="generic-input-icon">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {error ? (
        <img className="error-icon" src={errorIcon} alt="input-error" />
      ) : null}
    </div>
  );
};

export default GenericInputIcon;
