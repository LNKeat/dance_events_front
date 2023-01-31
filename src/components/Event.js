import { useState } from 'react';
import DeleteButton from './DeleteButton';
import Card from 'react-bootstrap/Card';


function Event({ onClick, evt, handleDelete }) {
  const [isAffordable, setIsAffordable] = useState(evt.affordable)

  const toggleAffordable = async () => { 
    const updEvt = {...evt, affordable: !isAffordable}
    const res = await fetch(`http://localhost:5000/dance-events/${evt.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updEvt)
    })
    setIsAffordable(!isAffordable)
  }

  const flagColor = () => {
    const redFlag= '#cb2345'
    const greenFlag= '#74a489'
    return isAffordable ? greenFlag : redFlag
  };
    

  return (
    <Card className='m-2' style={{ width: '18rem', backgroundColor: '#e6e6e6', textAlign:'left' }} onDoubleClick={toggleAffordable}>
      <Card.Body variant="top"
       style={{backgroundColor: `${flagColor()}`}}>{isAffordable ? 'Affordable Event' : 'Expensive Event'}</Card.Body>
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
      </Card.Body>
    </Card>
  );
}

export default Event;