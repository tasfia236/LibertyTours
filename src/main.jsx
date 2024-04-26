import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import Home from './components/Home.jsx';
import AllSpots from './components/AllSpots/AllSpots.jsx';
import AddSpot from './components/AddSpot/AddSpot.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
        path: "/allspots",
        element: <AllSpots></AllSpots>
      },
      {
        path: "/addspot",
        element: <AddSpot></AddSpot>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
