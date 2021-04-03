import React, { useState, useContext } from 'react';
import { UserContext } from './userContext';
import './Login.scss'

function Login() {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!userInput) {
      setError('Name is required');
    } else {
      login(userInput);
    }
  }

  const handleInputChange = e => {
    setUserInput(e.target.value);
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <label htmlFor='user-input'>
        Enter Your Name:
      </label>
      <div className='input-wrapper'>
        <input id="user-input" name='user-input' value={userInput} onChange={handleInputChange} autoFocus />
        <span className='error'>{error}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;