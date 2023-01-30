import React from 'react'
import Events from '../components/Events';
import { Container, Row, Col } from 'react-bootstrap';


const Welcome = () => {
  return (
    <Container fluid className="boot-pract" style={{textAlign: 'center'}}>
      <Row>
        <Col>
          <h1>Dance Event Tracker Application</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>View your dance event wish list below.  Double click on the event to change the cost rating.</p>
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