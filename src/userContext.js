import React, {useEffect, useState} from 'react';
import {getLocalUser, saveLocalUser, setLocalMessages} from './localStorage';

export const UserContext = React.createContext('');

export function UserProvider({children}) {
  const [user, setUser] = useState(getLocalUser() || '');

  useEffect(() => {
    saveLocalUser(user);
  }, [user])

  const login = name => {
    setUser(name);
  }

  const logout = () => {
    setUser('');
    setLocalMessages([]);
  }

  return (
    <UserContext.Provider value={{ user, login, logout}}>
        {children}
    </UserContext.Provider>
  );
}
