import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Event from './Event'


const Events = ({ onClick, evtList }) => {

  return (
    <>
    <Container fluid className="boot-pract" style={{textAlign: 'center'}}>
      {evtList.map((evt) => (
            <Col key={evt.id} lg="auto">
              <Event evt={evt} onClick={onClick} />
            </Col>

      ))}
    </Container></>
  )
}

export default Events