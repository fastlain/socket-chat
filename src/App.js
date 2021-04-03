import React, { useEffect, useState } from 'react';
import {SocketContext, socket} from './socket';
import {getLocalUser} from './localStorage';
import UserInput from './UserInput';
import Messages from './Messages';
import MessageInput from './MessageInput';

// const channel = 'code-test';

function App() {
    const [user, setUser] = useState(getLocalUser() || '');

    useEffect(() => {
      localStorage.setItem('user', user);
    }, [user])

  return (
    <SocketContext.Provider value={socket}>
      <h1>Chat App</h1>
      {user ?  
      (<>
        <h2>User: {user}</h2>
        
        <Messages />
        <MessageInput />

      </>
      ) : <UserInput setUser={setUser}/>}
    </SocketContext.Provider>
  );
}

export default App