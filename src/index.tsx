import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { initContract } from './near/utils';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

window.nearInitPromise = initContract()
  .then(() => {
    root.render(<App />);
  })
  .catch(console.error);
