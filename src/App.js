import React from 'react';
import './App.css';
import MainPage from './MainPage/MainPage';
import ContactPage from './ContactPage/ContactPage';
import PolicyPage from './Policy/PolicyPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policy" element={<PolicyPage />} />


        </Routes>
      </div>

    </Router>
  );
}

export default App;
