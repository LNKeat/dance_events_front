
import EventService from '../services/EventService';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form, Row, Button, Dropdown } from 'react-bootstrap';


//carry location over from update event
function EventForm({ }) {
  const params = useParams()
  const navigate = useNavigate()
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState("")
  const [formValues, setFormValues] = useState({
    "name": "",
    "start": "",
    "is_affordable": "",
    "dance_style": "",
    "price": "",
    "id": ""
  })
  const locationList = [
    {
    id: 235,
    name: "Pasadena, California"
    },
    {
    id: 236,
    name: "New York, New York"
    },
    {
    id: 237,
    name: "Stockholm, Sweden"
    },
    {
    id: 238,
    name: "Melbourne, Australia"
    },
    {
    id: 239,
    name: "Denver, CO"
    }
    ]

  useEffect(() => {
//fetch locations
  const fetchLocations = async () => {
    const resp = await fetch('http://localhost:9292/locations')
    const data = await resp.json()
    setLocations(data)
}
//fetch events
    const fetchEvt = async () => {
      const resp = await fetch(`http://localhost:9292/events/${params.evtId}`)
      const data = await resp.json()
      setFormValues({
        ...data,
        location_name: data.location.name
      })
    }
    fetchLocations()
    Object.keys(params).length && fetchEvt()
  }, [params])

  function onChange(e) {
    console.log(e.target.name, e.target.value)
    const { name, value } = e.target;
    if (name !== "location") {
      const newFormValues = { ...formValues, [name]: value }
      setFormValues(newFormValues)
    } else {
      const newLocation = value
      setLocation(newLocation)
    }
  }

  const onAdd = async (evt) => {
    const res = await fetch('http://localhost:9292/events', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(evt),
    })
    const evtData = await res.json()
  }

  //checks if there are params
  //params ? run updateEvent : run addEvent (helper functions in EventService.js)

  const onSubmit = async (e) => {
    e.preventDefault()
    Object.keys(params).length ? await EventService.updateEvent(formValues) : await onAdd(formValues)
    setFormValues({
      "name": "",
      "start": "",
      "dance_style": "",
      "location_name": "",
      "price": "",
      "id": ""
    })
    navigate('/');
  }

  ///TO DO--- make dropdown with locations with Location_id, ??remove ability to update event name and event location (only update price, date, dance-style)

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Event Name:</Form.Label>
            <Form.Control placeholder="Event Name" name="name" value={formValues.name}
              onChange={onChange} />
          </Form.Group>
        </Col>
        <Col className="m-4">
 {/* Location Input Here */}
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Location
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {locations.map((loc) => <Dropdown.Item key={loc.id}>{loc.name}</Dropdown.Item> )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Event Location:</Form.Label>
            <Form.Control placeholder="Location" name="location" value={location}
              onChange={onChange} />
          </Form.Group>
 {/* Location Input Here */}
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control placeholder="Month/Day/Year" name="start" value={formValues.start}
              onChange={onChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className='justify-bottom'>
          <Form.Group className="mb-3" controlId="formBasicStyle">
            <Form.Label>Dance Style:</Form.Label>
            <Form.Control as="textarea" placeholder="Dance Style" name="dance_style" value={formValues.dance_style}
              onChange={onChange} />
          </Form.Group>
        </Col>
        <Col className='justify-bottom'>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price:</Form.Label>
            <Form.Control placeholder="Price" name="price" value={formValues.price}
              onChange={onChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ textAlign: 'right' }}>
        <Col>
          <Button type="submit" style={{ backgroundColor: '#6c63ff', border: 'none' }}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default EventForm;