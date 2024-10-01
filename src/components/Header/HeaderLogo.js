import React from "react";
import { Link } from "react-router-dom";

export default function HeaderLogo(props) {
  return (
    <Link to={props.LogoLink}>
      <img className="header__logo" src={props.Logo} alt="kozhura"></img>
    </Link>
  );
}
