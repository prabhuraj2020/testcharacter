import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
function App() {
  return (
    <Container>
       <Row>
         <Col>
    <Router>
      <Routes>     
    <Route path="/" element={<CharacterList />} />
      <Route path="/character/:characterId" element={<CharacterDetails />} />
      </Routes>
    </Router>
    </Col>
     </Row>
     </Container>
  );
}

export default App;
