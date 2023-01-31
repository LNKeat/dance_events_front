import { Col, Form, Row} from 'react-bootstrap';

function AddEventForm() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Event Name" />
        </Col>
        <Col>
          <Form.Control placeholder="Location" />
        </Col>
      </Row>
      <Row>
        <Col className='justify-bottom'>
        <Form.Control as="textarea" placeholder="Description" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check type='checkbox' label="Affordable Event"/>
        </Col>
      </Row>
      

    </Form>
  );
}

export default AddEventForm;