import React, { forwardRef } from "react";

const InputDate = forwardRef(function InputDate({ value = {}, onChange }, ref) {
  const { day = "", month = "", year = "" } = value;

  const handleDayChange = (event) => {
    const newDay = event.target.value;
    if (newDay === "" || (Number(newDay) >= 1 && Number(newDay) <= 31)) {
      onChange({ ...value, day: newDay });
    }
  };

  const handleMonthChange = (event) => {
    const newMonth = event.target.value;
    if (newMonth === "" || (Number(newMonth) >= 1 && Number(newMonth) <= 12)) {
      onChange({ ...value, month: newMonth });
    }
  };

  const handleYearChange = (event) => {
    const newYear = event.target.value;
    if (newYear.length <= 4) {
      onChange({ ...value, year: newYear });
    }
  };

  return (
    <div>
      <input
        ref={ref}
        id="day"
        name="day"
        type="number"
        value={day}
        onChange={handleDayChange}
        placeholder="Число"
        className="data-inputs short"
        max="31"
        min="1"
      />
      <input
        ref={ref}
        id="month"
        name="month"
        type="number"
        value={month}
        onChange={handleMonthChange}
        placeholder="Месяц"
        className="data-inputs short"
        max="12"
        min="1"
      />
      <input
        ref={ref}
        id="year"
        name="year"
        type="text"
        value={year}
        onChange={handleYearChange}
        placeholder="Год"
        className="data-inputs short"
        maxLength="4"
      />
    </div>
  );
});

export default InputDate;
