import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';

<<<<<<< HEAD

=======
>>>>>>> 530eb16a56f1b6b4948c0ac60ce523e1b5235606
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

