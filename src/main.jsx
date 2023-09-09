import React, { createRef } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
