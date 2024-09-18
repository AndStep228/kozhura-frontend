import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import HeaderLink from './HeaderLink'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu';

export class Header extends Component {
    constructor(props) {
        super(props)

        this.containerRef = React.createRef();
        this.handleResize = this.handleResize.bind(this)
        this.state = {
            didBurgerTrue: false,
            didBurgerPressed: false,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    handleResize() {
        if (this.containerRef.current) {
            const containerWidth = this.containerRef.current.offsetWidth;
            if (containerWidth <= 1200) {
                this.setState({ didBurgerTrue: true });
            } else {
                this.setState({ didBurgerTrue: false });
            }
        }
    }

    burgerPressed = () => {
        this.setState((prevState) => ({
            didBurgerPressed: !prevState.didBurgerPressed,
        }));
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
