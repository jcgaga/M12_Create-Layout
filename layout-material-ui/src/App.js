import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import BreadcrumbComponent from "./components/BreadcrumbComponent/BreadcrumbComponent";
import ImgMediaCard from "./components/CardComponent/CardComponent";
import DatePickers from "./components/DatepickerComponent/DatepickerComponent";
import Checkboxes from "./components/CheckboxComponent/CheckboxComponent";
import ContinuousSlider from "./components/SliderComponent/SliderComponent";
import RangeSlider from "./components/SliderComponent/RangeSliderComponent";
import FormComponent from "./components/FormComponent/FormComponent";
import CustomizedMenus from "./components/DropdownComponent/DropdownComponent";

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    height: "200px",
    background: "green",
    paddingTop: "60px",
    paddingLeft: 50,
  },
  card: {
    height: "200px",
    background: "aqua",
    padding: 10,
  },
  datepicker: {
    height: "200px",
    background: "coral",
    paddingTop: "30px",
  },
  dropdown: {
    height: "200px",
    background: "purple",
    paddingTop: "30px",
  },
  form: {
    height: "400px",
    background: "khaki",
    paddingTop: "15px",
  },
  slider: {
    height: "200px",
    background: "orange",
  },
  checkbox: {
    height: "200px",
    background: "mediumpurple",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className="title">
        <h1>M12 Exercici </h1>
        <h1>Creant un layout amb Material UI</h1>
      </div>
      <div>
        <Container fixed>
          <Grid container spacing={5}>
            <Grid container xs={6}>
              <Grid item xs={8} className={classes.breadcrumb}>
                <BreadcrumbComponent />
              </Grid>
              <Grid item xs={4} className={classes.card}>
              <ImgMediaCard />
              </Grid>
              <Grid item xs={4} className={classes.datepicker}>
                <DatePickers />
              </Grid>
              <Grid item xs={8} className={classes.dropdown}>
                <CustomizedMenus />
              </Grid>
            </Grid>
            <Grid container xs={3} className={classes.form}>
            <FormComponent />
            </Grid>
            <Grid container xs={3}>
              <Grid item xs={12} className={classes.slider}>
                <ContinuousSlider />
                <RangeSlider />
              </Grid>
              <Grid item xs={12} className={classes.checkbox}>
                <Checkboxes />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;
