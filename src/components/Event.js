import DeleteButton from './DeleteButton';
import Card from 'react-bootstrap/Card';


function Event() {
  return (
    <Card style={{ width: '18rem', backgroundColor: "#e6e6e6" }}>
      <Card.Body variant="top"
       style={{backgroundColor: "#3f3d56"}} />
      <Card.Body>
        <Card.Title>Event Name</Card.Title>
        <Card.Text>
          Event Date: _____________
        </Card.Text>
        <DeleteButton />
      </Card.Body>
    </Card>
  );
}

export default Event;