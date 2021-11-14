import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
