import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';

import Banking from "./pages/banking-app";

function Spa(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/bank-app" element={<Banking/>}/>
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Spa/>
  </React.StrictMode>,
  document.getElementById('root')
);

