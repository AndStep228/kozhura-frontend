import React, { Component, useEffect, useState } from "react";
import { withRouter } from "../withRouter";
import HeaderLink from "./HeaderLink";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.handleResize = this.handleResize.bind(this);
    this.windowScroll = this.windowScroll.bind(this);
    this.state = {
      didBurgerTrue: false,
      didBurgerPressed: false,
      falseBurger: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.windowScroll);
    this.handleResize();
  }

  handleResize() {
    if (this.containerRef.current) {
      const containerWidth = this.containerRef.current.offsetWidth;
      if (containerWidth <= 1200) {
        this.setState((prevState) => ({
          didBurgerTrue: (prevState.didBurgerTrue = true),
        }));
      } else {
        this.setState((prevState) => ({
          didBurgerTrue: (prevState.didBurgerTrue = false),
        }));
      }
    }
  }

  windowScroll() {
    this.setState((prevState) => ({
      didBurgerPressed: (prevState.didBurgerPressed = false),
    }));
    document.body.style.overflow = "";
  }

  burgerPressed = () => {
    const containerWidth = this.containerRef.current.offsetWidth;

    this.setState((prevState) => ({
      didBurgerPressed: !prevState.didBurgerPressed,
    }));

    if (containerWidth <= 768 && this.state.didBurgerPressed === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  headerClose = (event) => {
    if (event.target !== event.currentTarget) {
      document.body.style.overflow = "";
      this.setState((prevState) => ({
        didBurgerPressed: !prevState.didBurgerPressed,
      }));
    }
  };

  render() {
    const { didBurgerPressed } = this.state;
    const { location } = this.props;

    const headerClass =
      location.pathname !== "/" && location.pathname !== "/about-us"
        ? "header header-bkg" // Специальный класс для этой страницы
        : "header";

    if (this.state.didBurgerTrue === false) {
      return (
        <header id="header" className={headerClass}>
          <div ref={this.containerRef} className="container">
            <div className="header__block">
              <HeaderLogo LogoLink="/" Logo="/img/kozhura_white.svg" />
              <div className="header-links">
                <HeaderLink LinkTxt="О нас" Link="/about-us" />
                <HeaderLink LinkTxt="Библиотека" Link="/library" />
                <HeaderLink LinkTxt="Новости" Link="/news" />
              </div>
              <div className="header-ex-links">
                <HeaderLink LinkTxt="Работодатель" Link="#" />
                <a
                  className="header-links__item"
                  target="_blank"
                  href="https://kozhura-nsk.tilda.ws/"
                >
                  KOZHURA_BIM
                </a>
                <HeaderLink LinkImg="/img/header_youtube.svg" />
              </div>
            </div>
          </div>
          <div className="header__line"></div>
        </header>
      );
    } else {
      return (
        <header id="header" className={headerClass}>
          <div ref={this.containerRef} className="container">
            <div className="header__block">
              <HeaderLogo LogoLink="/" Logo="/img/kozhura_white.svg" />
              <div className="header-links">
                <HeaderLink
                  didBurgerPressed={didBurgerPressed}
                  onClick={this.burgerPressed}
                  IsBurger={true}
                />
                <HeaderMenu
                  onClick={this.headerClose}
                  className={`burger__block ${
                    didBurgerPressed ? "active" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="header__line"></div>
        </header>
      );
    }
  }
}

export default withRouter(Header);
