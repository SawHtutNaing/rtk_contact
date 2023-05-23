import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'flowbite';

import { BrowserRouter } from 'react-router-dom';

import { store } from './Features/services/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux';

Provider


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

<Provider store={store }>


<App />
   
    </Provider>
    </BrowserRouter>

  </React.StrictMode>,
)
