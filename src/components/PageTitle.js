import React from "react";

export default function PageTitle(props) {
  return (
    <div className="page-title__block">
      <div
        className={`page-title__line ${props.lineUnable ? "inactive" : ""}`}
      ></div>
      <h1 className="page__title">{props.PageTitle}</h1>
    </div>
  );
}
