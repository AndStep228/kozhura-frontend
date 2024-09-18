import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import HeaderLink from './HeaderLink'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu';

export class Header extends Component {
    constructor(props) {
        super(props)

        this.containerRef = React.createRef();
        this.handleResize = this.handleResize.bind(this);
        this.windowScroll = this.windowScroll.bind(this)
        this.state = {
            didBurgerTrue: false,
            didBurgerPressed: false,
            isScrollLocked: false,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.windowScroll);
        this.handleResize();
    }

    handleResize() {
        if (this.containerRef.current) {
            const containerWidth = this.containerRef.current.offsetWidth;
            if (containerWidth <= 1200) {
                this.setState((prevState) => ({
                    didBurgerTrue: prevState.didBurgerTrue = true,
                }));
            } else {
                this.setState((prevState) => ({
                    didBurgerTrue: prevState.didBurgerTrue = false,
                }));
            }
        }
    }

    windowScroll() {
        this.setState((prevState) => ({
            didBurgerPressed: prevState.didBurgerPressed = false,
        }));
    }

    burgerPressed = () => {
        const containerWidth = this.containerRef.current.offsetWidth;

        this.setState((prevState) => ({
            didBurgerPressed: !prevState.didBurgerPressed,
        }));
        if (containerWidth <= 768 && !this.state.isScrollLocked) {
            document.body.style.overflow = 'hidden';
            this.setState((prevState) => ({
                isScrollLocked: prevState.isScrollLocked = true,
            }));
        }
        else if (this.state.isScrollLocked) {
            document.body.style.overflow = '';
            this.setState((prevState) => ({
                isScrollLocked: prevState.isScrollLocked = false,
            }));
        }
    };

    render() {
        const { didBurgerPressed } = this.state;

        if (this.state.didBurgerTrue === false) {
            return (
                <header className="header">
                    <div ref={this.containerRef} className="container">
                        <div className='header__block'>
                            <HeaderLogo Logo='/img/kozhura_white.svg' />
                            <div className='header-links'>
                                <HeaderLink LinkTxt='О нас' Link='#' />
                                <HeaderLink LinkTxt='Библиотека' Link='#' />
                                <HeaderLink LinkTxt='Новости' Link='#' />
                            </div>
                            <div className='header-ex-links'>
                                <HeaderLink LinkTxt='Работодатель' Link='#' />
                                <HeaderLink LinkTxt='KOZHURA_BIM' Link='#' />
                                <HeaderLink Link='#' LinkImg='/img/header_youtube.svg' />
                            </div>
                        </div>
                    </div>
                    <div className='header__line'></div>
                </header>
            )
        }
        else {
            return (
                <header className="header">
                    <div ref={this.containerRef} className="container">
                        <div className='header__block'>
                            <HeaderLogo Logo='/img/kozhura_white.svg' />
                            <div className='header-links'>
                                <HeaderLink didBurgerPressed={didBurgerPressed} onClick={this.burgerPressed} IsBurger={true} />
                                <HeaderMenu className={`burger__block ${didBurgerPressed ? 'active' : ''}`} />
                            </div>
                        </div>
                    </div>
                    <div className='header__line'></div>
                </header>
            )
        }
    }
}

export default Header
