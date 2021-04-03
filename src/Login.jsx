import React, { useState, useContext } from 'react';
import { UserContext } from './userContext';

function Login() {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!userInput) {
      setError('Username is required!');
    } else {
      login(userInput);
    }
  }

  const handleInputChange = e => {
    setUserInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user-input">
        Username:
        <span>{error}</span>
      </label>
      <input id="user-input" name="user-input" value={userInput} onChange={handleInputChange} />
      <button type="submit" >Submit</button>
    </form>
  );
}

export default Login;