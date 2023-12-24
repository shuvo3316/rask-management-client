import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Addtask from "../Pages/Dashboard/Addtask/Addtask";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { Swap } from "../Pages/Dashboard/Swap/Swap";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/login',
            element:<Login></Login>

        },
        {
            path:'/about',
            element:<About></About>

        },
        {
            path:'/signup',
            element:<SignUp></SignUp>

        },
        {
            path:'/dashboard',
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            children:[
              {
                path:'/dashboard',
                element:<PrivateRoute><Swap></Swap></PrivateRoute>
               
              },
              {
                path:'addtask',
                element:<Addtask></Addtask>
              }
            ]

        },
      ]
    },
  ]);