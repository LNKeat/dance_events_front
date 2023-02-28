import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row, Button, Alert, Container } from 'react-bootstrap';

function LocationForm({ }) {
    const [newLocation, setNewLocation] = useState("")
    const [evtAdded, setEvtAdded] = useState(false)
    const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      const resp = await fetch('http://localhost:9292/locations')
      const data = await resp.json()
      setLocations(data)
    }
    fetchLocations()
  }, [])



    const onAdd = async (loc) => {
        const res = await fetch('http://localhost:9292/locations', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name: loc }),
        })
        const data = await res.json()
        const updLocations = [...locations, data]
        setLocations(updLocations)
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        onAdd(newLocation)
        setNewLocation("")
        setEvtAdded(true)        
    }


    return (
        <>
            <Row>
                <h6>List of locations:</h6>
                {locations.map((location) => <p key={location.id} style={{fontSize: 10}}>{location.name}</p>)}
            </Row>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicLocation">
                        <h6>Add location:</h6>
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
                    {evtAdded && (
                        <Row>
                            <Col>
                                <Alert>New Location Added! <Button href={`/`} style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Events</Button></Alert>
                            </Col>
                        </Row>
                    )}
                </Row>
            </Form>
        </>
    );
}

export default LocationForm;