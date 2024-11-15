import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import ErrorElement from './Components/ErrorElement/ErrorElement';
import Contact from './Components/ContactUs/Contact';
import TeamSection from './Components/TeamSection/TeamSection';
import AboutUs from './Components/AboutUs/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<ErrorElement/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Team",
        element:<TeamSection/>
      },
      {
        path:"/AboutUs",
        element:<AboutUs/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
