import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import StatsPage from './Pages/Stats';
// import PicksStatsPage from './PicksStatsPage';

function App() {
  return (
    <Router basename="/laMarshalada"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;