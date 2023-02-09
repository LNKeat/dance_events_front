import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import EventForm from './pages/EventForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Container  style={{border: 0}}>
        <Header />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/add' element={<EventForm />} />
          <Route path='/update/:evtId' element={<EventForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
  