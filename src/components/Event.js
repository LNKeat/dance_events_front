import DeleteButton from './DeleteButton';
import Card from 'react-bootstrap/Card';


function Event() {
    const redFlag= '#cb2345'
    const greenFlag= '#257d4c'
    const yellowFlag= '#f7ed85'

  return (
    <Card style={{ width: '18rem', backgroundColor: '#e6e6e6' }}>
      <Card.Body variant="top"
       style={{backgroundColor: `${greenFlag}`}} />
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