import { createBrowserRouter } from 'react-router-dom';
import Login from './components/login/login.jsx';
import Home from './components/home/home.jsx';
const router = createBrowserRouter([
    {
      path: '/test',
      element: <Home/>,
    },
    {
      path: '/login',
      element: <Login />,
    }
  ]);


export default router;
