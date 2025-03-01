import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <BrowserRouter basename="/HomeWork"> */}
    <App />
    {/* </BrowserRouter> */}
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
