import React, { useContext } from 'react';
import { UserContext } from './userContext';

function UserInfo() {
    const { user, logout } = useContext(UserContext)
    return (
        <>
            <h2>User: {user}</h2>
            <button onClick={logout}>X</button>
        </>
    );
}

export default UserInfo;