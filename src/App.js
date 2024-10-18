import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import ResultsPage from './pages/ResultsPage';

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UploadPage setResults={setResults} />} />
          <Route path="/results" element={<ResultsPage results={results} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;