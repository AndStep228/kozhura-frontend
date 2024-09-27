import React, { Component } from "react";
import PageTitle from "../PageTitle";
import FooterNav from "./FooterNav";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <PageTitle PageTitle="Контакты" />
          <div className="footer__wrapper">
            <div className="footer__block">
              <div className="footer__info">
                <img className="footer__logo" src="/img/logo_kozhura.svg" />
                <div className="info__links">
                  <div className="info__items">
                    <a
                      href="mailto:sibfasadkadr@mail.ru"
                      className="info__item"
                    >
                      sibfasadkadr@mail.ru
                    </a>
                    <a href="tel:+73832049914" className="info__item">
                      +7 (383) 204-99-14.
                    </a>
                  </div>
                  <a
                    href="https://www.youtube.com/@siberianfacades8362"
                    className="info__link"
                  >
                    <img src="/img/header_youtube.svg" />
                  </a>
                </div>
              </div>
              <div className="footer-nav">
                <div className="footer-nav__item">
                  <p className="footer-nav__title">product</p>
                  <div className="footer-nav__link-block">
                    <FooterNav footerLink="/" navTxt="Главная" />
                    <FooterNav footerLink="/library" navTxt="Библиотека" />
                  </div>
                </div>
                <div className="footer-nav__item">
                  <p className="footer-nav__title">Education</p>
                  <div className="footer-nav__link-block">
                    <FooterNav footerLink="/about-us" navTxt="О нас" />
                    <FooterNav footerLink="/news" navTxt="Новости" />
                  </div>
                </div>
                <div className="footer-nav__item">
                  <p className="footer-nav__title">help</p>
                  <div className="footer-nav__link-block">
                    <FooterNav footerLink="/employer" navTxt="Работодатель" />
                    <a
                      className="footer-nav__link"
                      target="_blank"
                      href="https://kozhura-nsk.tilda.ws/"
                    >
                      KOZHURA_BIM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__faq">
          <div className="container">
            <div className="faq__block">
              <p className="faq__txt">
                ООО «КОЖУРА», 630132 г. Новосибирск, ул. 1905 года, 69, офис 6;
                ИНН 5407982582;
              </p>
              <p className="faq__txt">Disigned by CSP</p>
            </div>
          </div>
        </div>
        <a href="#header" className="up-btn">
          <img src="/img/arrow.svg" />
        </a>
      </footer>
    );
  }
}
