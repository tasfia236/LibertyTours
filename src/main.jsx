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
import Contact from './components/Contact/Contact.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import SpotsDetails from './components/SpotsDetails/SpotsDetails.jsx';
import UpdateSpot from './components/UpdateSpots/UpdateSpot.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:8000/tourspots')
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><SpotsDetails></SpotsDetails></PrivateRoute>,
   //     loader: () => fetch('http://localhost:8000/tourspots')
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>
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
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
