import React from "react";
import { Link } from "react-router-dom";

export default function HeaderMenu(props) {
  return (
    <div className={props.className}>
      <div className="burger__nav">
        <Link to="/" className="nav__link" onClick={props.onClick}>
          Главная
        </Link>
        <Link to="/about-us" className="nav__link" onClick={props.onClick}>
          О нас
        </Link>
        <Link to="/library" className="nav__link" onClick={props.onClick}>
          Библиотека
        </Link>
        <Link to="/news" className="nav__link" onClick={props.onClick}>
          Новости
        </Link>
      </div>
      <div className="header__line"></div>
      <div className="burger__ex-nav">
        <Link to="/employer" className="nav__link" onClick={props.onClick}>
          Работодатель
        </Link>
        <a
          className="nav__link"
          href="https://kozhura-nsk.tilda.ws/"
          onClick={props.onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          KOZHURA_BIM
        </a>
        <a className="nav__link" href="#" onClick={props.onClick}>
          <img src="img/header_youtube.svg" alt="" className="ex-nav__item" />
        </a>
      </div>
    </div>
  );
}
