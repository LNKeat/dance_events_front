
//post request to create a new event to the database
  const addEvent = async (formValues) => {
    const date = new Date(formValues.start)
    const newEvent = {...formValues, start: date}
    const res = await fetch('http://localhost:9292/events', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
    const evtData = await res.json()
  }

//put request to update a specific event in the database
  const updateEvent = async (formValues) => {
    const eventRes = await fetch(`http://localhost:9292/events/${formValues.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(formValues),
    })
}

export default {
    addEvent,
    updateEvent
};