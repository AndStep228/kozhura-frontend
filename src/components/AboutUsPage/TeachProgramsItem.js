import React from "react";

export default function TeachProgramsItem(props) {
  if (!props.leftWrap) {
    return (
      <div className="teach-programs__item">
        <div className="teach-programs__txt">
          <h1>{props.programTitle}</h1>
          <ul>
            <li>
              <h5>{props.programSubtitle}</h5>
            </li>
            <li>
              <h5>{props.programTwoSubtitle}</h5>
            </li>
            {props.programThreeSubtitle ? (
              <li>
                <h5>{props.programThreeSubtitle}</h5>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <img src={props.programImg} alt="teach-programs" />
      </div>
    );
  } else {
    return (
      <div className="teach-programs__item left-wrap">
        <img src={props.programImg} alt="teach-programs" />
        <div className="teach-programs__txt">
          <h1>{props.programTitle}</h1>
          <ul>
            <li>
              <h5>{props.programSubtitle}</h5>
            </li>
            <li>
              <h5>{props.programTwoSubtitle}</h5>
            </li>
            {props.programThreeSubtitle ? (
              <li>
                <h5>{props.programThreeSubtitle}</h5>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    );
  }
}
