import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row, Button, Alert, Container } from 'react-bootstrap';

function LocationForm({ }) {
    const [newLocation, setNewLocation] = useState("")
    const [evtAdded, setEvtAdded] = useState(false)

    const onAdd= async (loc) => {
        const res = await fetch('http://localhost:9292/locations', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({name: loc}),
        })
        const data = await res.json()
        console.log(data)
       }


    const onSubmit = async (e) => {
        e.preventDefault()
        onAdd(newLocation)
        setNewLocation("")
        setEvtAdded(true)
    }


    return (
        <Form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicLocation">
                        <Form.Label>Add Location:</Form.Label>
                        <Form.Control placeholder="City, State (or Country)" name="newLocation" value={newLocation}
                            onChange={(e) => setNewLocation(e.target.value)} />
                    </Form.Group>
                </Col>
                <Row style={{ textAlign: 'right' }}>
                    <Col>
                        <Button type="submit" style={{ backgroundColor: '#6c63ff', border: 'none' }}>
                            Submit
                        </Button>
                    </Col>
                </Row>
                {evtAdded && (<Container>
                <Row>
                    <Col>
                        <Alert>New Event Added! <Button href={`/`} style={{backgroundColor: '#6c63ff', border: 'none'}}>View Events</Button></Alert>
                    </Col>
                </Row>
                </Container>)}
            </Row>
        </Form>
    );
}

export default LocationForm;