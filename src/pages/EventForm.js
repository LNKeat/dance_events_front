import FormServices from '../services/FormServices';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form, Row, Button, Dropdown } from 'react-bootstrap';


//carry location over from update event
function EventForm({ }) {
  const params = useParams()
  const navigate = useNavigate()
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState({name: "Event Location", id: null})
  const [formValues, setFormValues] = useState({
    "name": "",
    "start": "",
    "is_affordable": false,
    "dance_style": "",
    "price": 0,
    "location_id": 0,
    "location_name": "",
    "id": 0
  })

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
      setLocation({name: data.location.name, id: data.location_id})
    }
    fetchLocations()
    Object.keys(params).length && fetchEvt()
  }, [params])

  function onChange(e) {
    const { name, value } = e.target;
    if (name !== "location") {
      const newFormValues = { ...formValues, [name]: value }
      setFormValues(newFormValues)
    } else {
      const newLocation = value
      setLocation(newLocation)
    }
  }

  //onSubmit checks if there are params
  //params ? run updateEvent : run addEvent (helper functions in FormServices.js)
  const onSubmit = async (e) => {
    e.preventDefault()

    Object.keys(params).length ? await FormServices.updateEvent(formValues) : await FormServices.addEvent(formValues)
    setFormValues({
      "name": "",
      "start": "",
      "is_affordable": "",
      "dance_style": "",
      "price": "",
      "location_id": "",
      "location_name": "",
      "id": ""
    })
    navigate('/');
  }

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
        
        <Col>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control placeholder="Month/Day/Year" name="start" value={formValues.start}
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
      <Row>
        <Col className='justify-bottom'>
          <Form.Group className="mb-3" controlId="formBasicStyle">
            <Form.Label>Dance Style:</Form.Label>
            <Form.Control as="textarea" placeholder="Dance Style" name="dance_style" value={formValues.dance_style}
              onChange={onChange} />
          </Form.Group>
        </Col>
        <Col className="m-2">
        <Form.Label className="m-3 p-0"> </Form.Label>
            <Dropdown onSelect={(eventKey, event) => {
              const locId = eventKey
              const locName = event.target.innerText
              setLocation({name: locName, id: locId})
              setFormValues({...formValues, location_id: locId, location_name: locName})
              }}>
              <Dropdown.Toggle style={{backgroundColor: '#6c63ff', border: 'none'}} id="dropdown-basic">
                {location.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {locations.map((loc) => <Dropdown.Item eventKey={loc.id} key={loc.id}>{loc.name}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
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