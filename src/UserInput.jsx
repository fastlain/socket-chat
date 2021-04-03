import React, { useState } from 'react';

function UserInput({ setUser }) {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!userInput) {
      setError('Username is required!');
    } else {
      setUser(userInput);
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

export default UserInput;