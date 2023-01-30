import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';



const BootstrapPract = () => {
  return (
    <Container fluid className="boot-pract" style={{textAlign: 'center'}}>
      <Row>
        <Col>
          <h1>Practice Styling Component</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Something here</p>
        </Col>
      </Row>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" />
          <Card.Body  style={{backgroundColor: '#e6e6e6', textAlign: 'start'}}>
            <Card.Title>Dance Event Name</Card.Title>
            <Card.Text>
              Event Date: 
            </Card.Text>
            <Button className="btn" style={{backgroundColor: "#6c63ff", border:'none', textAlign: 'center'}}>Delete</Button>
          </Card.Body>
        </Card>
      
      <Row>
        <Col style={{textAlign: 'start'}}>
          <Image rounded src="./images/undraw_happy_music_g6wc.svg" width={200} height={200} />
        </Col>
      </Row>
    </Container>
  )
}

export default BootstrapPract