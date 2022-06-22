import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import {UserProvider} from './context/schoolState/schoolContext'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <UserProvider>
        <App/>
        </UserProvider>
    </AuthContextProvider>

   </BrowserRouter>

  </React.StrictMode>
);

