import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
