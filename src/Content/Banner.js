import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import CtaButton from './Button';

export const Banner=(props)=> {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col className="bannerTitle" lg={8}>{props.title}</Col>
          <Col className="bannerCta" lg={4}><CtaButton text={props.cta}/></Col>
        </Row>
      </Container>
    </div>
  );
}

