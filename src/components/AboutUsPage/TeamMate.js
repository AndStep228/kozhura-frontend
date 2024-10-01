import React from "react";

export default function TeamMate(props) {
  return (
    <div className="our-team__item">
      <img src={props.teamMateImg} alt="teammate" />
      <p className="teammate__title">{props.teamMateTitle}</p>
      <p className="teammate__subtitle">{props.teamMateSubTitle}</p>
    </div>
  );
}
