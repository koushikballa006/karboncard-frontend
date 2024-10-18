import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/FileUpload';

const UploadPage = ({ setResults }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log('Sending request to:', 'http://127.0.0.1:5000/api/analyze');
      const response = await fetch('http://127.0.0.1:5000/api/analyze', {
        method: 'POST',
        body: formData,
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Received data:', data);
      setResults(data);
      navigate('/results');
    } catch (error) {
      console.error('Error:', error);
      setError(`Failed to upload and analyze the file. Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Upload Financial Data</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
};

export default UploadPage;