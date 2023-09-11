import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/authContext';
import { GunContextProvider } from './context/gunChoseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <GunContextProvider>
          <App/>
        </GunContextProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);