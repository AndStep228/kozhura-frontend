import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  if (props.isLink) {
    return (
      <a target={props.btnTarget} href={props.btnHref} className="button__link">
        <button type={props.btnType} className="button">
          {props.buttonTxt}
        </button>
      </a>
    );
  } else if (props.isPageLink) {
    return (
      <Link to={props.btnLink}>
        <button type={props.btnType} className="button">
          {props.buttonTxt}
        </button>
      </Link>
    );
  } else {
    return (
      <button onClick={props.onClick} type={props.btnType} className="button">
        {props.buttonTxt}
      </button>
    );
  }
}
