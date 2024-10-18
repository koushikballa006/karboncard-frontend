import React from 'react';
import { Link } from 'react-router-dom';
import Results from '../components/Results';

const ResultsPage = ({ results }) => {
  return (
    <div>
      <h1>Analysis Results</h1>
      <Results results={results} />
      <Link to="/">Back to Upload</Link>
    </div>
  );
};

export default ResultsPage;