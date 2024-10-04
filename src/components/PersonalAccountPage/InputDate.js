import React, { useState } from "react";

function InputDate() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDayChange = (event) => {
    const value = event.target.value;
    if (value === "" || (Number(value) >= 1 && Number(value) <= 31)) {
      setDay(value);
    }
  };

  const handleMonthChange = (event) => {
    const value = event.target.value;
    if (value === "" || (Number(value) >= 1 && Number(value) <= 12)) {
      setMonth(value);
    }
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    if (value.length <= 4) {
      // Ограничение длины до 4 символов
      setYear(value);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={day}
        onChange={handleDayChange}
        placeholder="Число"
        className="data-inputs short"
        max="31"
        min="1"
      />
      <input
        type="number"
        value={month}
        onChange={handleMonthChange}
        placeholder="Месяц"
        className="data-inputs short"
        max="12"
        min="1"
      />
      <input
        type="text"
        value={year}
        onChange={handleYearChange}
        placeholder="Год"
        className="data-inputs short"
        maxLength="4"
      />
    </div>
  );
}

export default InputDate;
