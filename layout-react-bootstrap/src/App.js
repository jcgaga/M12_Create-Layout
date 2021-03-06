import React from 'react';
import './App.css';
// import components react-bootstrap
import {Container, Row, Col}  from 'react-bootstrap';
// import css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import my components
import BreadcrumbComponent from './components/BreadcrumbComponent/BreadcrumbComponent';
import CardComponent from './components/CardComponent/CardComponent';
import FormComponent from './components/FormComponent/FormComponent';
import CheckboxComponent from './components/CheckboxComponent/CheckboxComponent';
import SliderComponent from './components/SliderComponent/SliderComponent';
import DropdowComponent from './components/DropdownComponent/DropdownComponent';
import DatepickerComponent from './components/DatepickerComponent/DatepickerComponent';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>M12 Exercici </h1> 
        <h1>Creant un layout amb React-Bootstrap</h1>
      </div>
      <Container  className="">
        <Row className="row-heigth">
          <Col xs={6}>
            <Row>
              <Col xs={8} className="bg-danger col-big pt-4 "><BreadcrumbComponent /></Col>
              <Col xs={4} className="bg-primary col-small"><CardComponent /></Col>
            </Row>
            <Row className="d-flex">
              <Col xs={4} className="bg-secondary d-flex align-items-center justify-content-center"><DatepickerComponent /></Col>
              <Col xs={8} className="bg-info col-big d-flex align-items-center justify-content-center"><DropdowComponent /></Col>
            </Row>
          </Col>
          <Col xs={3} className="bg-warning pt-4 d-flex align-items-start justify-content-center">
            <FormComponent />
          </Col>
          <Col xs={3}>
            <Row>
              <Col className="bg-danger col-big d-flex align-items-center justify-content-center"><SliderComponent /></Col>
            </Row>
            <Row>  
              <Col className="bg-info col-big d-flex align-items-center justify-content-center"><CheckboxComponent /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
