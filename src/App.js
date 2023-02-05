import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import EventForm from './pages/EventForm';
import Events from './components/Events';
import BootstrapPract from './components/BootstrapPract';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  


  return (
    <Router>
      <Container  style={{border: 0}}>
        <Header />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/add' element={<EventForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
  