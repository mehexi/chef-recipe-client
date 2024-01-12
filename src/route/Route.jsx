import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../layout/Home';
import HomePage from '../pages/HomePage/HomePage';

const router = createBrowserRouter([
    {
      path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
          }
      ]
    },
  ]);

export default router;