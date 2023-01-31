import { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

function AddEventForm() {
  //create state for form values
  const [formValues, setFormValues] = useState({
    "name": "",
    "start": "",
    "affordable": false,
    "desc": "",
    "location": ""
  })

  function handleChange(e) {
    const { name, value, checked } = e.target;
    const newData = {
      ...formValues,
      [name]: name !== 'affordable' ? value : checked
    }
    setFormValues(newData)
    console.log(newData)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <Form.Control placeholder="Event Name" name="name" value={formValues.name}
          onChange={handleChange} />
        </Col>
        <Col>
          <Form.Control placeholder="Location" name="location" value={formValues.location}
          onChange={handleChange} />
        </Col>
      </Row>
      <Row>
        <Col className='justify-bottom'>
        <Form.Control as="textarea" placeholder="Description" name="desc" value={formValues.desc}
          onChange={handleChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check type='checkbox' label="Affordable Event" name="affordable" checked={formValues.affordable} onChange={handleChange}/>
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

export default AddEventForm;