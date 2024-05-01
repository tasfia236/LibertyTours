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
import Home from './components/Home/Home.jsx';
import AllSpots from './components/AllSpots/AllSpots.jsx';
import AddSpot from './components/AddSpot/AddSpot.jsx';
import Contact from './components/Contact/Contact.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders.jsx';
//import PrivateRoute from './Route/PrivateRoute.jsx';
import SpotsDetails from './components/SpotsDetails/SpotsDetails.jsx';
import UpdateSpot from './components/UpdateSpots/UpdateSpot.jsx';
import MyList from './components/MyList/MyList.jsx';
import CountriesSpots from './components/CountriesSpots/CountriesSpots.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
   //     loader: () => fetch(' http://localhost:8000/tourspots')
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><SpotsDetails></SpotsDetails></PrivateRoute>,
        loader: ({params}) => fetch(` http://localhost:8000/tourspots/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(` http://localhost:8000/tourspots/${params.id}`)
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
        element: <PrivateRoute><AllSpots></AllSpots></PrivateRoute>
      },
      {
        path: "/addspot",
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/mylist",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: "/country/:id",
        element: <PrivateRoute><CountriesSpots></CountriesSpots></PrivateRoute>,
        loader: ({params}) => fetch(` http://localhost:8000/country/${params.id}`)
  //    loader: ({params}) => fetch(` http://localhost:8000/tourspots/${params.name}`)
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
