import 'regenerator-runtime/runtime';
import React from 'react';
import { login, logout } from './near/utils';

export const App: React.FC = () => {
  // @ts-ignore for walletConnection
  if (window.walletConnection.isSignedIn()) {
    return (
      <div>
        <p>logged in</p>
        <button onClick={logout}>log out</button>
      </div>
    );
  }

  return (
    <div>
      <p>logged out</p>
      <button onClick={login}>log in</button>
    </div>
  );
};
