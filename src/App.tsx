import React from 'react';
import Login from './pages/Login/Login';
import Characters from './pages/Characters/Characters';
import Favourite from './pages/Favourite/Favourite';
import Error404 from './pages/Error404/Error404';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styles from "./App.module.scss";
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'characters',
    element: <Characters />
  },
  {
    path: 'favourite',
    element: <Favourite />
  },
  {
    path: '*',
    element: <Error404 />
  },
]);

function App() {

  return (
    <main className={`${styles.App}`}
    > 
        <RouterProvider router={router} />
        <ToastContainer aria-label="Notification container"/>
    </main>
  );
}

export default App;
