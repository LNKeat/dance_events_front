import React from 'react';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import AddEventForm from './pages/AddEventForm';
import Events from './components/Events';
import BootstrapPract from './components/BootstrapPract';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
  