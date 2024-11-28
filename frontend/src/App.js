import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import UnitListPage from "./components/UnitListPage";
import UnitDetailPage from './components/UnitDetailPage';

const App = () => (
    <Router>
        <div className="page-container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/units" element={<UnitListPage />} />
                <Route path="/units/:id" element={<UnitDetailPage />} />
            </Routes>
        </div>
    </Router>
);

export default App;
