import React, { useState } from "react";

// DatePicker --> https://github.com/Hacker0x01/react-datepicker.git
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
 import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatepickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};

export default DatepickerComponent;