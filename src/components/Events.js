import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Event from './Event'


const Events = ({ onClick, evtList, handleDelete }) => {

  return (
    <>
    <Container fluid className="boot-pract" style={{textAlign: 'center'}}>
      <Row md="auto">
      {evtList.map((evt) => (
            <Col key={evt.id}>
              <Event evt={evt} handleDelete={handleDelete} />
            </Col>

      ))}
      </Row>
    </Container>
    </>
  )
}

export default Events