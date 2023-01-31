import { useState } from 'react';
import Events from '../components/Events';
import { Container, Row, Col } from 'react-bootstrap';


const Welcome = () => {
  const [evtList, setEvtList] = useState(
    [
      {
        "id": 1,
        "name": "California Balboa Classic",
        "start": "January 15, 2024",
        "affordable": true,
        "desc": "Balboa",
        "location": "Pasadana, California"
      },
      {
        "id": 2,
        "name": "Hot Rhythm Holiday",
        "start": "February 17, 2023",
        "affordable": true,
        "desc": "Lindy Hop, Shag, Balboa",
        "location": "Austin, Texas"
      },
      {
        "id": 3,
        "name": "Camp Hollywood",
        "start": "September 3, 2023",
        "affordable": false,
        "desc": "Lindy Hop, Shag, Balboa",
        "location": "Los Angeles, California"
      },
      {
        "id": 4,
        "name": "Camp Jitterbug",
        "start": "May 24, 2023",
        "affordable": false,
        "desc": "Lindy Hop, Solo Jazz",
        "location": "Seattle, Washington"
      }
    ]
  )
  //Click action to delete event
  const onClick = () =>{
    console.log('I was deleted')
  }
  
  return (
    <Container fluid style={{textAlign: 'center'}}>
      <Row>
        <Col style={{textAlign: 'start'}}>
          <h3>View your dance event list below.</h3> 
           <p>Double click on the event to change the cost rating.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Events onClick={onClick} evtList={evtList}  />
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome