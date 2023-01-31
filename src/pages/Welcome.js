import { useEffect } from 'react';
import Events from '../components/Events';
import { Container, Row, Col } from 'react-bootstrap';


const Welcome = ({ evtList, setEvtList, handleDelete }) => {
  useEffect(() => {
    const fetchEvts = async () => {
     const resp = await fetch('http://localhost:5000/dance-events')
     const data = await resp.json()
     setEvtList(data)
    }
    fetchEvts()
   }, [])
  
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
          <Events handleDelete={handleDelete} evtList={evtList.sort((a,b)=> new Date(a.start) < new Date(b.start) ? -1 : 0)}  />
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome