import React, { useState, useEffect, useContext } from 'react';
import { getLocalMessages, setLocalMessages } from './localStorage';
import { SocketContext, channel } from './socket';

function Messages() {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState(getLocalMessages() || []);

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join-channel', channel);
    })
    socket.on('error', (e) => {
      console.error(e);
    });
    socket.on('message', msg => {
      setMessages(oldMessages => [...oldMessages, msg]);
    })
  }, [socket])

  useEffect(() => {
    setLocalMessages(messages);
  }, [messages])

  const clearMessages = () => {
    setMessages([]);
  }

  return (
    <>
      <h3>Messages</h3>
      <button onClick={clearMessages}>Clear</button>
      <ul>
        {messages.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
    </>
  );
}

export default Messages;