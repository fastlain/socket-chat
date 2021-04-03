import React, { useContext } from 'react';
import { UserContext } from './userContext';
import './UserInfo.scss';

function UserInfo() {
  const { user, logout } = useContext(UserContext)
  return (
    <div className='userInfo'>
      <h3>Welcome <span>{user?.name}</span>!</h3>
      <button onClick={logout}>Change User</button>
    </div>
  );
}

export default UserInfo;