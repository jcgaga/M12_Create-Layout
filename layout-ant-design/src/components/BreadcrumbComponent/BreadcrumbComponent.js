import React from "react";
import { Breadcrumb } from "antd";

function BreadcrumbComponent() {
  return (
    <Breadcrumb style={{margin:"15px"}}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;
