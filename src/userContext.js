import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {getLocalUser, saveLocalUser, setLocalMessages} from './localStorage';

export const UserContext = React.createContext('');

export function UserProvider({children}) {
  const [user, setUser] = useState(getLocalUser() || {});

  useEffect(() => {
    saveLocalUser(user);
  }, [user])

  const login = name => {
    const id = uuidv4();
    setUser({name, id});
  }

  const logout = () => {
    setUser({});
    setLocalMessages([]);
  }

  return (
    <UserContext.Provider value={{ user, login, logout}}>
        {children}
    </UserContext.Provider>
  );
}
