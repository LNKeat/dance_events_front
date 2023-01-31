import React from 'react';
import { Container } from 'react-bootstrap';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import AddEventForm from './pages/AddEventForm';
import Events from './components/Events';
import BootstrapPract from './components/BootstrapPract';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container style={{border: 0}}>
      <Header />
      <Welcome />
    </Container>
  );
}

export default App;
  