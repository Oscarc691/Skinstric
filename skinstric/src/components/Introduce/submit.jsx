import React from 'react';
import axios from 'axios';

const SubmitButton = ({ name }) => {

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert('Please enter some information');
      return;
    }

    try {
      const response = await axios.post('https://wk7wmfz7x8.execute-api.us-east-2.amazonaws.com/live/FES_Virtual_Internship_1/level1', { name });
      console.log('Response:', response);
      alert('Data submitted successfully');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      alert('Failed to submit data');
    }
  };

  return (
    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
      Submit
    </button>
  );
};

export default SubmitButton;