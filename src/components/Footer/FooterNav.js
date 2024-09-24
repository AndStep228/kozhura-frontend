import React from "react";
import { Link } from "react-router-dom";

export default function FooterNav(props) {
  if (props.navLink) {
    return (
      <a href={props.navLink} className="footer-nav__link">
        {props.navTxt}
      </a>
    );
  } else {
    return (
      <Link to={props.footerLink} className="footer-nav__link">
        {props.navTxt}
      </Link>
    );
  }
}
