import React, { useEffect, forwardRef } from "react";

const DefaultInput = forwardRef(function DefaultInput(
  { inputPlaceholder, name, inputType, inputNumberMin, value, onChange },
  ref
) {
  useEffect(() => {
    localStorage.setItem(name, value || "");
  }, [value, name]);

  return (
    <input
      id={name}
      name={name}
      ref={ref}
      value={value || ""}
      onChange={onChange}
      placeholder={inputPlaceholder}
      className="data-inputs"
      type={inputType}
      min={inputNumberMin}
    />
  );
});

export default DefaultInput;
