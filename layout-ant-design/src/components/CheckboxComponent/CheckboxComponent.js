import React from "react";
import { Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default function CheckboxComponent() {
  return (
    <React.StrictMode>
      <Checkbox onChange={onChange}>Option 1</Checkbox>
      <br></br>
      <Checkbox onChange={onChange}>Option 2</Checkbox>
      <br></br>
      <Checkbox onChange={onChange}>Option 3</Checkbox>
    </React.StrictMode>
  );
}
