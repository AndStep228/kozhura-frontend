import React from "react";
import Button from "../Button";

export default function NewItem(props) {
  return (
    <div className="new__item">
      <img src={props.newImg} alt="" />
      <p className="new__txt">{props.newTxt}</p>
      <Button
        btnHref={props.newHref}
        isLink={true}
        buttonTxt="Подробнее"
        btnTarget="_blank"
      />
    </div>
  );
}
