import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import AddEventForm from './pages/AddEventForm';
import Events from './components/Events';
import BootstrapPract from './components/BootstrapPract';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // <Container style={{border: 0}}>
    //   <Header />
    //   <Welcome />
    // </Container>
    <Router>
      <Container  style={{border: 0}}>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Welcome />}
          />
          <Route path='/add' element={<AddEventForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
  