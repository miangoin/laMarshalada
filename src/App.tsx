import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import StatsPage from './Pages/Stats';
import Casas from './Pages/Casas';
import Test from './Pages/TestMarshall'
function App() {
  return (
    <Router basename="/laMarshalada">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/casas" element={<Casas />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;