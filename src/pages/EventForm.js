
import EventService from '../services/EventService';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form, Row, Button } from 'react-bootstrap';

function EventForm({ }) {
  const params = useParams()
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    "name": "",
    "start": "",
    "is_affordable": false,
    "dance_style": "",
    "location_name": "", 
    "price":"",
    "id": ""
  })

    useEffect(() => {
    const fetchEvt = async () => {
      const resp = await fetch(`http://localhost:9292/events/${params.evtId}`)
      const data = await resp.json()
      setFormValues({
        ...data,
        location_name: data.location.name
    })

     }
     Object.keys(params).length && fetchEvt() 
    }, [params])

  function onChange(e) {
    const { name, value, checked } = e.target;
    const newData = {
      ...formValues,
      [name]: name !== 'is_affordable' ? value : checked
    }

    setFormValues(newData)
  }

   const onAdd= async (evt) => {
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
      "is_affordable": false,
      "dance_style": "",
      "location_name": "",
      "price":"",
      "id": ""
    })
    navigate('/');
  }


  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <Form.Control placeholder="Event Name" name="name" value={formValues.name}
          onChange={onChange} />
        </Col>
        <Col>
          <Form.Control placeholder="Location" name="location_name" value={formValues.location_name}
          onChange={onChange} />
        </Col>
        <Col>
          <Form.Control placeholder="Event Start Date" name="start" value={formValues.start}
          onChange={onChange} />
        </Col>
      </Row>
      <Row>
        <Col className='justify-bottom'>
        <Form.Control as="textarea" placeholder="Dance Style" name="dance_style" value={formValues.dance_style}
          onChange={onChange} />
        </Col>
        <Col className='justify-bottom'>
        <Form.Control placeholder="Price" name="price" value={formValues.price}
          onChange={onChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check type='checkbox' label="Affordable Event" name="is_affordable" checked={formValues.affordable} onChange={onChange}/>
        </Col>
      </Row>
      <Row style={{textAlign: 'right'}}>
        <Col>
        <Button type="submit" style={{backgroundColor: '#6c63ff', border: 'none'}}>
        Submit
      </Button>
        </Col>
      </Row>

    </Form>
  );
}

export default EventForm;