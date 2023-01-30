import React from 'react'
import Events from '../components/Events';
import { Container, Row, Col } from 'react-bootstrap';


const Welcome = () => {
  return (
    <Container fluid className="boot-pract" style={{textAlign: 'center'}}>
      <Row>
        <Col style={{textAlign: 'start'}}>
          <h3>View your dance event list below.</h3> 
           <p>Double click on the event to change the cost rating.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Events />
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome