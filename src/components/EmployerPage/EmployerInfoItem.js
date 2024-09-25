import React from "react";

export default function EmployerInfoItem(props) {
  return (
    <div className="employer-info__item">
      <h3>{props.infoNum}</h3>
      <div className="employer-info__txt">
        <h3>{props.infoTitle}</h3>
        <p>{props.infoTxt}</p>
      </div>
      <div className="employer-info__line"></div>
    </div>
  );
}
