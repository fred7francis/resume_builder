import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import CreateResume from './components/pages/CreateResume';



const App = () => {
  return <>
    <Navbar />
    <Container>
      {/* <Home /> */}
      <CreateResume />
    </Container>

  </>;
};

export default App;

