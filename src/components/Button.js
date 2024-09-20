import React from "react";

export default function Button({ btnType = "button", buttonTxt }) {
  return (
    <button type={btnType} className="button">
      {buttonTxt}
    </button>
  );
}
