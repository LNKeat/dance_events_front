import React from 'react';
import { Container } from 'react-bootstrap';
import Event from './Event'


const Events = ({ onClick, evtList }) => {
  const list = [
    {
      "id": 1,
      "name": "California Balboa Classic",
      "start": "January 15, 2024",
      "affordable": true,
      "desc": "Balboa",
      "location": "Pasadana, California"
    },
    {
      "id": 2,
      "name": "Hot Rhythm Holiday",
      "start": "February 17, 2023",
      "affordable": true,
      "desc": "Lindy Hop, Shag, Balboa",
      "location": "Austin, Texas"
    },
    {
      "id": 3,
      "name": "Camp Hollywood",
      "start": "September 3, 2023",
      "affordable": false,
      "desc": "Lindy Hop, Shag, Balboa",
      "location": "Los Angeles, California"
    },
    {
      "id": 4,
      "name": "Camp Jitterbug",
      "start": "May 24, 2023",
      "affordable": false,
      "desc": "Lindy Hop, Solo Jazz",
      "location": "Seattle, Washington"
    }
  ]
  return (
    <>
    <Container fluid className="boot-pract" style={{textAlign: 'center'}}>
      {evtList.map((evt) => (
        <Event key={evt.id} evt={evt} onClick={onClick} />
      ))}
    </Container></>
  )
}

export default Events