import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';

>>>>>>> 3f2ef6aa44395c30d94f6f6079b721eec7f150c2
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
        <App/>
    </AuthContextProvider>

   </BrowserRouter>

  </React.StrictMode>
);

