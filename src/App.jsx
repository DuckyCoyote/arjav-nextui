import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import NavBar from './components/navbar/navbar.component'
import Tienda from './pages/tienda';

import './App.css';

export default function App() {
  let routes = useRoutes([{ path: '/tienda', element: <Tienda /> }]);
  return (
    <div className="">
      <NavBar />
    </div>
  );
}
