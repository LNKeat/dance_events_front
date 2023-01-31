import DeleteButton from './DeleteButton';
import Card from 'react-bootstrap/Card';


function Event({ onClick, evt }) {
    const redFlag= '#ff6584'
    const greenFlag= '#74a489'
    const yellowFlag= '#f7ed85'

  return (
    <Card className='m-2' style={{ width: '18rem', backgroundColor: '#e6e6e6', textAlign:'left' }}>
      <Card.Body variant="top"
       style={{backgroundColor: `${greenFlag}`}} />
      <Card.Body>
        <Card.Title>{evt.name}</Card.Title>
        <Card.Text>
          {evt.start}
        </Card.Text>
        <Card.Text>
          {evt.desc}
        </Card.Text>
        <DeleteButton onClick={onClick} />
      </Card.Body>
    </Card>
  );
}

export default Event;