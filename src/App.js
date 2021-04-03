import React, { useContext } from 'react';
import {UserContext} from './userContext';
import './App.scss';
import UserInfo from './UserInfo';
import Login from './Login';
import Messages from './Messages';
import MessageInput from './MessageInput';

function App() {
  const {user} = useContext(UserContext);

  const isUserLoggedIn = Boolean(user?.id);

  return (
    <div className='app'>
      <h1>Socket Chat</h1>
      <div className='app-content'>
        {isUserLoggedIn ?  
          (<>
            <UserInfo />
            <Messages />
            <MessageInput />
          </>
          ) : <Login/>}
      </div>
    </div>
  );
}

export default App;