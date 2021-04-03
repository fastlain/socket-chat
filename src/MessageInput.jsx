import React, { useState, useContext } from 'react';
import { SocketContext } from './socket'

function MessageInput() {
  const socket = useContext(SocketContext);
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSend = e => {
    e.preventDefault()
    socket.emit('message', input);
    setInput('');
  }

  return (
    <form onSubmit={handleSend}>
      <input onChange={handleInput} value={input}></input>
      <button type="submit">SEND</button>
    </form>
  );
}

export default MessageInput;