import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Cards from './Cards'

function CardContainer() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Cards />
        </Col>

        <Col lg={4}>
          <Cards />
        </Col>

        <Col lg={4}>
          <Cards />
        </Col>
        
      </Row>

      
    </Container>
  );
}

export default CardContainer