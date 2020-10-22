import React from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";

function BreadcrumbComponent() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="#">
        Material-UI
      </Link>
      <Link
        color="inherit"
        href="#"
      >
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}

export default BreadcrumbComponent;
