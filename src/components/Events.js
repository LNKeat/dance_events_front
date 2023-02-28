import { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Event from './Event'


const Events = () => {
  const [evtList, setEvtList] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      const resp = await fetch('http://localhost:9292/events')
      const evtData = await resp.json()
      setEvtList(evtData.map((evt) => ({
        ...evt,
        location_name: evt.location.name
      })))
    }
    getEvents()
  }, [])



  const onAdd = async (evt) => {
    const res = await fetch('http://localhost:5000/dance-events', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(evt),
    })
    const evtData = await res.json()
  }

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:9292/events/${id}`, {
      method: 'DELETE',
    })
    setEvtList(evtList.filter((evt) => evt.id !== id))
  }

  return (
    <Container fluid className="boot-pract" style={{ textAlign: 'center' }}>
  
      <Row md="auto">
        {evtList.map((evt) => (
          <Col key={evt.id}>
            <Event evt={evt} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Events