import React, { useState } from 'react'

export default function HeaderLink(props) {


    if (props.LinkImg !== undefined) {
        return (
            <a className='header-links__item' href={props.Link}>
                {props.LinkTxt}
                <img alt='youtubeLink' src={props.LinkImg} />
            </a>
        )
    }
    else if (props.LinkImg !== undefined && props.LinkTxt === undefined) {
        return (
            <a className='header-links__item' href={props.Link}>
            </a>
        )
    }
    else if (props.IsBurger === true) {
        return (
            <div onClick={props.onClick} className={`header__burger ${props.didBurgerPressed ? 'active' : ''}`}>
                <span></span>
            </div>
        )
    }
    else {
        return (
            <a className='header-links__item' href={props.Link}>
                {props.LinkTxt}
            </a>
        )
    }

}
