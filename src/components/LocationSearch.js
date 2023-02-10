import { useState } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import Select from 'react-select';

const LocationSearch = () => {
    const [location, setLocation] = useState([])
    const [locList, setLocList ] = useState([
        { name: "Denver, Coloarado", id: 1 },
        { name: "Melbourne, Australia", id: 3 },
        { name: "Stockholm, Sweden", id: 4 }
    ])

    const handleChange = (e) => {
        setLocation(e.target.value)
        }
    const buildLocList = () => {
        const filteredLocs = locList.filter((option) => option.name.match(location))
        !filteredLocs.length && alert("Please add a new location.")
        return filteredLocs.map((option) => <option key={option.id} value={option.name}>{option.name}</option>)
    }
    

    return (
        <>
        <h4>This is my datalist... hopefully</h4>
            <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label>Event Location:</Form.Label>
                <Form.Control placeholder="Location" name="location" value={location.name}
                    onChange={handleChange} list="data" />
            </Form.Group>
            <datalist id="data">
              {buildLocList()}
            </datalist>
            
        </>
    )
}

export default LocationSearch