import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Event from './Event'

const Events = () => {
  return (
    <Container fluid className="boot-pract" style={{textAlign: 'center'}}>
      <Row>
        <Col  sm={12} lg={6} style={{textAlign: 'start'}}>
            <Event />
        </Col>
      </Row>
    </Container>
  )
}

export default Events