import React from "react";

export default function Button(props) {
  if (props.isLink) {
    return (
      <a target={props.btnTarget} href={props.btnHref} className="">
        <button type={props.btnType} className="button">
          {props.buttonTxt}
        </button>
      </a>
    );
  } else {
    return (
      <button type={props.btnType} className="button">
        {props.buttonTxt}
      </button>
    );
  }
}
