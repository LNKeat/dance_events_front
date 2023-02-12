// const getEvents = async () => {
//     const resp = await fetch('http://localhost:9292/events')
//     const evtData = await resp.json()
//     return evtData.map((evt) => ({
//         ...evt,
//         location_name: evt.location.name
//     }))
// }

const updateEvent = async (formValues) => {
    const location = {
        id: formValues.location_id,
        name: formValues.location_name
    }

    //update location
    const locationRes = await fetch(`http://localhost:9292/locations/${location.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(location),
    })


    //update event
    const eventRes = await fetch(`http://localhost:9292/events/${formValues.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(formValues),
    })
}

const addEvent = () => console.log('placeholder')
// const addEvent = async (formValues) => {
//     const location = {
//         id: formValues.location_id,
//         name: formValues.location_name
//     }

//     //add location
//     const locationRes = await fetch(`http://localhost:9292/locations/${location.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json',
//         },
//         body: JSON.stringify(location),
//     })


//     //add event
//     const eventRes = await fetch(`http://localhost:9292/events/${formValues.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json',
//         },
//         body: JSON.stringify(formValues),
//     })
// }

export default {
    updateEvent,
    addEvent
}