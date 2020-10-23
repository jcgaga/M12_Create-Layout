import React from "react";
import { DatePicker, Space } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}  

export default function DatePickers() {
 
  return (
      <Space direction="vertical">
      <DatePicker onChange={onChange} />
    </Space>    
  );
}
