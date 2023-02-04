import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cards } from "./Cards";
import dish1 from "./Assets/bruchetta.png";
import dish2 from "./Assets/lemon.jpg";
import dish3 from "./Assets/salad.jpg";

function CardContainer() {
  const data = [
    {
      imageURL: dish1,
      title: "Bruchetta",
      price: "5.99",
      description:
        "Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    },
    {
      imageURL: dish2,
      title: "Lemon Cake",
      price: "4.99",
      description:
        "This comes straight from the grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined ",
    },
    {
      imageURL: dish3,
      title: "Greek Salad",
      price: "10.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, Olives and our Chicago style feta cheese,garnished with crunchy garlic and rosemary coutons",
    },
  ];
  return (
    <Container className="cardContainer">
      <Row>
        {data.map((ele) => {
          return (
            <Col lg={4} key={ele.title}>
              <Cards data={ele} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardContainer;
