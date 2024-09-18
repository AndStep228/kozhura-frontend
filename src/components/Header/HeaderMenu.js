import React from 'react'

export default function HeaderMenu(props) {
    return (
        <div className={props.className}>
            <div className="burger__nav">
                <a className="nav__link" href="#">
                    Главная
                </a>
                <a className="nav__link" href="#">
                    О нас
                </a>
                <a className="nav__link" href="#">
                    Библиотека
                </a>
                <a className="nav__link" href="#">
                    Новости
                </a>
            </div>
            <div className='header__line'></div>
            <div className="burger__ex-nav">
                <a className="nav__link" href="#">
                    Работодатель
                </a>
                <a className="nav__link" href="#">
                    KOZHURA_BIM
                </a>
                <a className="nav__link" href="#">
                    <img src="img/header_youtube.svg" alt="" className="ex-nav__item" />
                </a>
            </div>
        </div>
    )
}
