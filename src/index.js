"use strict"
import React from 'react';
import {render} from 'react-dom';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import "./css/Index.css"

const Routes = (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
)

render(
  Routes, document.getElementById('root')
);
