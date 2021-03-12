import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";

import "./style.scss";

const DropDownMenu = () => {
  const [telefono, setTelefono] = useState("");
  const dispatch = useDispatch();

  const handleClickMenu = () => {
    if (window.innerWidth < 768 && telefono.length === 0) {
      setTelefono("telefono");
    } else {
      setTelefono("");
    }
  };

  const handleClickLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
  }

  return (
    <Fragment>
    <div className={`drop-down-menu ${telefono}`} onClick={handleClickMenu}>
      {!telefono ? (
        <i className="fas fa-bars fa-lg"></i>
      ) : (
        <i className="fas fa-times fa-lg"></i>
      )}
      <div className={`drop-down-menu-options ${telefono}`}>
        <span>Menú</span>
        <a href="*"> Cuenta</a>
        <a href="*" onClick={handleClickLogout}> Cerrar sesión</a>
      </div>
    </div>
    <div className={`drop-down-menu-transparent-background ${telefono}`} />
    </Fragment>
  );
};

export default DropDownMenu;
