import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Home/Login';
import Register from './Components/Home/Register';
import Authprovider from './Components/Usecontext/Authprovider';
import Orders from './Components/Orders/Orders';
import Privetrouter from './Privetrouter/Privetrouter';
import Profile from './Components/Orders/Profile';
import Dashbord from './Components/Orders/Dashbord';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <Privetrouter><Orders></Orders></Privetrouter>
      },
      {
        path: "/profile",
        element: <Privetrouter><Profile></Profile></Privetrouter>
      },
      {
        path: "/dashbord",
        element: <Privetrouter><Dashbord></Dashbord></Privetrouter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
