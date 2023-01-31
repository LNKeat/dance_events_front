import { useState } from 'react';
import DeleteButton from './DeleteButton';
import Card from 'react-bootstrap/Card';


function Event({ onClick, evt }) {
  const [isAffordable, setIsAffordable] = useState(evt.affordable)

  const toggleAffordable = () => { setIsAffordable(!isAffordable)}

  const flagColor = () => {
    const redFlag= '#cb2345'
    const greenFlag= '#74a489'
    return isAffordable ? greenFlag : redFlag
  };
    

  return (
    <Card className='m-2' style={{ width: '18rem', backgroundColor: '#e6e6e6', textAlign:'left' }} onDoubleClick={toggleAffordable}>
      <Card.Body variant="top"
       style={{backgroundColor: `${flagColor()}`}} />
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
        <DeleteButton onClick={() => onClick(evt.id)} />
      </Card.Body>
    </Card>
  );
}

export default Event;