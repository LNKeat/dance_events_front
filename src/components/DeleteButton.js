import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style={{backgroundColor: '#6c63ff', border: 'none'}}>Remove</Button>
  )
}

export default DeleteButton 