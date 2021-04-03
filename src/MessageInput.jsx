import React, { useState, useContext } from 'react';
import { SocketContext, channel } from './socket'

function MessageInput() {
  const socket = useContext(SocketContext);
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSend = e => {
    e.preventDefault()
    if (input) {
      socket.emit('message', input, channel);
      setInput('');
    }
  }

  return (
    <form onSubmit={handleSend}>
      <input onChange={handleInput} value={input}></input>
      <button type="submit" disabled={!input}>SEND</button>
    </form>
  );
}

export default MessageInput;