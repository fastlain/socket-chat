import React, { useContext } from 'react';
import {UserContext} from './userContext';

import UserInfo from './UserInfo';
import Login from './Login';
import Messages from './Messages';
import MessageInput from './MessageInput';

// const channel = 'code-test';

function App() {
  const {user} = useContext(UserContext);

  return (
    <>
      <h1>Chat App</h1>
      {user ?  
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