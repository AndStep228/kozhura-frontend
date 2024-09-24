import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderLink(props) {
  if (props.LinkImg !== undefined) {
    return (
      <a
        target="blank"
        href="https://www.youtube.com/@siberianfacades8362"
        className="header-links__item"
      >
        {props.LinkTxt}
        <img alt="youtubeLink" src={props.LinkImg} />
      </a>
    );
  } else if (props.LinkImg !== undefined && props.LinkTxt === undefined) {
    return <Link className="header-links__item" to={props.Link}></Link>;
  } else if (props.IsBurger === true) {
    return (
      <div
        onClick={props.onClick}
        className={`header__burger ${props.didBurgerPressed ? "active" : ""}`}
      >
        <span></span>
      </div>
    );
  } else {
    return (
      <Link className="header-links__item" to={props.Link}>
        {props.LinkTxt}
      </Link>
    );
  }
}
