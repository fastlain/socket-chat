import React, { useState, useEffect, useContext, useRef } from 'react';
import { getLocalMessages, setLocalMessages } from './localStorage';
import { SocketContext, channel } from './socket';
import { UserContext } from './userContext';
import Message from './Message';
import './Messages.scss'

function Messages() {
  const socket = useContext(SocketContext);
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState(getLocalMessages() || []);
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    socket.emit('join-channel', channel);
    socket.on('error', (e) => {
      console.error(e);
    });
    socket.on('message', msg => {
      setMessages(oldMessages => [...oldMessages, msg]);
    })
  }, [socket])

  useEffect(() => {
    setLocalMessages(messages);
    scrollToBottom();
  }, [messages])

  return (
    <div className='messages'>
      <h3>MESSAGES</h3>
      <div className="message-container">
        {messages.map((msg, i) => {
          const isOwnMsg = msg.user.id === user.id;
          return <Message content={msg.content} username={msg.user.name} isOwnMsg={isOwnMsg} key={i} />
        })
        }
        < div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Messages;