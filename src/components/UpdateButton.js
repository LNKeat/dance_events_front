import React from 'react'
import { Button } from 'react-bootstrap'

const UpdateButton = ({ onClick, evt }) => {
    console.log(evt)
    return (
        <Button style={{backgroundColor: '#6c63ff', border: 'none'}}>Update Event</Button>
      )
}

export default UpdateButton