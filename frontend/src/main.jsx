import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HelmetProvider} from 'react-helmet-async';
import axios from "axios";
import { StoreProvider } from "./Store.jsx";

axios.defaults.baseUrl = 'http://localhost:8080'; //change this to server obce we have one in production for import from .env

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
