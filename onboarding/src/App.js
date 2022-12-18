
import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form.js';
import schema from './Components/Validation/formSchema.js';
import * as yup from 'yup';


const initialFormValues = {
  usedrname: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  
  
  const handleSubmit = () => {
    // WIP
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }
  
  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  return (
    <div className="App">
      < Form values={formValues} change={handleChange} errors={formErrors} />
    </div>
  );
}

export default App;
