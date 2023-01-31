import { useState } from 'react';
import Events from '../components/Events';
import { Container, Row, Col } from 'react-bootstrap';


const Welcome = ({ evtList, setEvtList }) => {

  //Click action to delete event
  const onClick = (id) =>{
    const updList = evtList.filter((evt)=> evt.id !== id )
    setEvtList(updList)
  }
  
  return (
    <Container fluid style={{textAlign: 'center'}}>
      <Row md="auto">
        <Col style={{textAlign: 'start'}}>
          <h3>View your dance event list below.</h3> 
           <p>Double click on the event to change the cost rating.</p>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <Events onClick={onClick} evtList={evtList.sort((a,b)=> new Date(a.start) < new Date(b.start) ? -1 : 0)}  />
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome