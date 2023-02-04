import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage from "./Assets/hero-image.jpg";
import CtaButton from "./Button";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";


export const HeroTeaser = () => {

  
  return (
    <article className="heroTeaser">
      <Container>
        <Row>
          <Col lg={8}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <div className="description">
              We are family owned Indian restaurant, focussed on traditional
              recipes served with a modern twist.
            </div>
        <CtaButton text="Reserve a Table" linkto="reservations"/>
          </Col>
          <Col lg={4}>
            <img
              src={heroImage}
              height={350}
              className="heroteaser-image"
            ></img>
          </Col>
        </Row>
      </Container>
    </article>
  );
};
