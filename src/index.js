import React from 'react';
import ReactDOM from 'react-dom';
import {SocketContext, socket} from './socket';
import {UserProvider} from './userContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <UserProvider>
        <App />
      </UserProvider>
    </SocketContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
