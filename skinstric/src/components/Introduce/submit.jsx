import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';

const SubmitButton = () => {
  const [data, setData] = useState('');

  function handleChange(e) {
        setData(e.target.value);
    }

  const handleSubmit = async () => {
    if (data.trim() === '') {
      alert('Please enter some data');
      return;
    }

    try {
      // Save data to local storage
      localStorage.setItem('formData', data);

      // Replace 'YOUR_API_URL' with your desired API endpoint
      const response = await axios.post('https://wk7wmfz7x8.execute-api.us-east-2.amazonaws.com/live/FES_Virtual_Internship_1/level1', { data });
      console.log('Data saved:', response.data);
      alert('Data successfully saved!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data');
    }
  };

  return (
    <div className="p-4">
      <Input 
        type="text" 
        placeholder="Enter data..." 
        value={data} 
        onChange={handleChange} 
        className="mb-2 p-2 border rounded"
      />
      <Button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
        Submit
      </Button>
    </div>
  );
};

export default SubmitButton;
