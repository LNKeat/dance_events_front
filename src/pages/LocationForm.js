import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row, Button } from 'react-bootstrap';

function LocationForm({ }) {
    const navigate = useNavigate()
    const [newLocation, setNewLocation] = useState("")

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
        navigate('/');
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
            </Row>
        </Form>
    );
}

export default LocationForm;