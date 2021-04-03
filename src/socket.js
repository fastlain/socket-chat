import React from 'react';
import io from 'socket.io-client';

const endpoint = 'wss://codechallenge.brand.live'

export const channel = 'code-test';
export const socket = io.connect(endpoint);
export const SocketContext = React.createContext();