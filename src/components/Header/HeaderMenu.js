import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderMenu(props) {
  return (
    <div className={props.className}>
      <div onClick={props.onClick} className="burger__nav">
        <Link to="/" className="nav__link">
          Главная
        </Link>
        <Link to="/about-us" className="nav__link">
          О нас
        </Link>
        <Link to="/library" className="nav__link">
          Библиотека
        </Link>
        <Link to="/news" className="nav__link">
          Новости
        </Link>
      </div>
      <div className="header__line"></div>
      <div className="burger__ex-nav">
        <Link className="nav__link">Работодатель</Link>
        <a className="nav__link" href="https://kozhura-nsk.tilda.ws/">
          KOZHURA_BIM
        </a>
        <a className="nav__link" href="#">
          <img src="img/header_youtube.svg" alt="" className="ex-nav__item" />
        </a>
      </div>
    </div>
  );
}
