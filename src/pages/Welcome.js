import { useEffect, useState } from 'react';
import Events from '../components/Events';
import { Container, Row, Col } from 'react-bootstrap';


const Welcome = () => {
  
  return (
    <Container fluid >
      <Row md="auto">
        <Col>
          <h3>View your dance event list below.</h3> 
           <p>Double click on the event to change the cost rating.</p>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <Events  />
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome