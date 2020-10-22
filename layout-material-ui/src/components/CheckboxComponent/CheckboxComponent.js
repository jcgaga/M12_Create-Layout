import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <h3>Checkbox</h3>
      <div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <label> Option 1</label>
      </div>
      <div>
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <label> Option 2</label>
      </div>
    </div>
  );
}
