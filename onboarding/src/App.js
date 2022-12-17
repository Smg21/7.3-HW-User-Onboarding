
import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form.js';

const initialFormValues = {
  usedrname: '',
  password: '',
  email: '',
  tos: false
}
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleSubmit = () => {
    // WIP
  }
  
  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }

  return (
    <div className="App">
      < Form values={formValues} change={handleChange} />
    </div>
  );
}

export default App;