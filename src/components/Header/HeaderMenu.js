import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeaderMenu(props) {
  const burgerOpen = true;
  const headerClose = (e) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    console.log("Ссылка нажата, но переход отменен!");
  };
  return (
    <div className={props.className}>
      <div className="burger__nav">
        <Link to="/" onClick={headerClose} className="nav__link">
          Главная
        </Link>
        <Link onClick={headerClose} to="/about-us" className="nav__link">
          О нас
        </Link>
        <Link onClick={headerClose} className="nav__link">
          Библиотека
        </Link>
        <Link onClick={headerClose} className="nav__link">
          Новости
        </Link>
      </div>
      <div className="header__line"></div>
      <div className="burger__ex-nav">
        <Link onClick={headerClose} className="nav__link">
          Работодатель
        </Link>
        <a onClick={headerClose} className="nav__link" href="#">
          KOZHURA_BIM
        </a>
        <a onClick={headerClose} className="nav__link" href="#">
          <img src="img/header_youtube.svg" alt="" className="ex-nav__item" />
        </a>
      </div>
    </div>
  );
}
