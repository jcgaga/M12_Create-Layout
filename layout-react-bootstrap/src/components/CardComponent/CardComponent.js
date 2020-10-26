import React from "react";
import { Card, Button } from "react-bootstrap";
import portrait from './images/portrait.jpg';

function CardComponent() {
  return (
    <Card style={{ width: "10rem", marginTop:"1rem" }}>
      <Card.Img variant="top" src={portrait} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;