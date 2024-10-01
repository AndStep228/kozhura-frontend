import React from "react";
import Button from "../Button";

export default function LibraryItem(props) {
  return (
    <div className="library__item">
      <div className="library__img">
        <img src={props.courseImg} alt="course" />
      </div>
      <div className="course__txt">
        <div className="course__title">
          <h1>{props.courseTitle}</h1>
          {props.courseSubTitle ? (
            <p className="course__subtitle">{props.courseSubTitle}</p>
          ) : (
            ""
          )}
        </div>
        <h3 className="course__desc">{props.courseDesc}</h3>
        <div className="course__btns">
          <Button
            isPageLink={true}
            btnLink={props.Link}
            buttonTxt="Узнать подробнее"
          />
          {props.secondBtn ? (
            <Button
              isLink={true}
              btnHref={props.coursePDFLink}
              btnTarget="_blank"
              buttonTxt="Скачать PDF"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
