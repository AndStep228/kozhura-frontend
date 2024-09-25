import React from "react";
import Button from "../Button";

export default function NewsItem(props) {
  return (
    <div className="news__item">
      <img src={props.newsImg} alt="" />
      <div className="news__info">
        <h5>{props.newsTitle}</h5>
        <p className="news__date">{props.newsDate}</p>
        <Button buttonTxt="Подробнее" />
      </div>
    </div>
  );
}
