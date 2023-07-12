import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import AuthProvider from './Providers/AuthProvider';
import Signup from './components/SignUp/SignUp';
import { HelmetProvider } from 'react-helmet-async';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<TodoList></TodoList>
      },
      {
        path: "/sign-up",
        element:<Signup></Signup>
      },
      {
        path: "/login",
        element:<Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
