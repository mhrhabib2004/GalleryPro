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


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<ErrorElement/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
