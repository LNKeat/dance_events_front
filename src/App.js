import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import AddEventForm from './pages/AddEventForm';
import Events from './components/Events';
import BootstrapPract from './components/BootstrapPract';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [evtList, setEvtList] = useState([])

  useEffect(() => {
    const fetchEvts = async () => {
     const resp = await fetch('http://localhost:5000/dance-events')
     const data = await resp.json()
     setEvtList(data)
    }
    fetchEvts()
   }, [])

   const onAdd= async (evt) => {
    const res = await fetch('http://localhost:5000/dance-events', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(evt),
    })
    const evtData = await res.json()
   }

   const onDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/dance-events/${id}`, {
      method: 'DELETE',
    })
    console.log(res.status)
    setEvtList(evtList.filter((evt) => evt.id !== id))
   }


  return (
    <Router>
      <Container  style={{border: 0}}>
        <Header />
        <Routes>
          <Route path='/' element={<Welcome evtList={evtList} setEvtList={setEvtList} handleDelete={onDelete} />} />
          <Route path='/add' element={<AddEventForm handleAddEvt={onAdd} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
  