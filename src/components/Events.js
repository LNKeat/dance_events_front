import React from 'react';
import { Container } from 'react-bootstrap';
import Event from './Event'


const Events = ({ onClick, evtList }) => {

  return (
    <>
    <Container fluid className="boot-pract" style={{textAlign: 'center'}}>
      {evtList.map((evt) => (
        <Event key={evt.id} evt={evt} onClick={onClick} />
      ))}
    </Container></>
  )
}

export default Events