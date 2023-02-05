import { useState } from 'react';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';
import Card from 'react-bootstrap/Card';


function Event({ evt, handleDelete }) {
  const [isAffordable, setIsAffordable] = useState(evt.affordable)

  const flagColor = () => {
    const redFlag= '#cb2345'
    const greenFlag= '#74a489'
    return isAffordable ? greenFlag : redFlag
  };
    

  return (
    <Card className='m-2' style={{ width: '18rem', backgroundColor: '#e6e6e6', textAlign:'left' }}>
      <Card.Body variant="top"
       style={{backgroundColor: `${flagColor()}`}}>{isAffordable ? 'Affordable' : 'Expensive'}</Card.Body>
      <Card.Body>
        <Card.Title>{evt.name}</Card.Title>
        <Card.Text>
          {evt.start}
        </Card.Text>
        <Card.Text>
          Location: {evt.location}
        </Card.Text>
        <Card.Text>
          Description: {evt.desc}
        </Card.Text>
        <DeleteButton onClick={() => handleDelete(evt.id)} />
        <UpdateButton evt={evt} />
      </Card.Body>
    </Card>
  );
}

export default Event;