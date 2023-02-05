import React from 'react'
import { Button } from 'react-bootstrap'

const UpdateButton = ({ onClick, evt }) => {
    return (
        <Button href={`/update/${evt.id}`} style={{backgroundColor: '#6c63ff', border: 'none'}}>Update Event</Button>
      )
}

export default UpdateButton