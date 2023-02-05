import { useEffect, useState } from 'react';
import Events from '../components/Events';
import { Container, Row, Col } from 'react-bootstrap';


const Welcome = () => {
  const [evtList, setEvtList] = useState([])

  useEffect(() => {
    const fetchEvts = async () => {
     const resp = await fetch('http://localhost:5000/dance-events')
     const data = await resp.json()
     setEvtList(data)
    }
    fetchEvts()
   }, [])

   const onAdd= async (evt) => {
    const res = await fetch('http://localhost:5000/dance-events', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(evt),
    })
    const evtData = await res.json()
   }

   const onDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/dance-events/${id}`, {
      method: 'DELETE',
    })
    console.log(res.status)
    setEvtList(evtList.filter((evt) => evt.id !== id))
   }
  
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
          <Events handleDelete={onDelete} evtList={evtList.sort((a,b)=> new Date(a.start) < new Date(b.start) ? -1 : 0)}  />
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome