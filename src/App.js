import Login from './pages/Login/Login';
import Characters from './pages/Characters/Characters';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'characters',
    element: <Characters />
  },
]);

function App() {

  return (
    <main className='App'> 
        <RouterProvider router={router} />
    </main>
  );
}

export default App;
