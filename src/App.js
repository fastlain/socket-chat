import React, { useContext } from 'react';
import {UserContext} from './userContext';

import UserInfo from './UserInfo';
import Login from './Login';
import Messages from './Messages';
import MessageInput from './MessageInput';

function App() {
  const {user} = useContext(UserContext);

  const isUserLoggedIn = Boolean(user?.id);

  return (
    <>
      <h1>Chat App</h1>
      {isUserLoggedIn ?  
      (<>
        <UserInfo />
        <Messages />
        <MessageInput />
      </>
      ) : <Login/>}
    </>
  );
}

export default App;