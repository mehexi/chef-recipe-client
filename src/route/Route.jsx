import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import HomePage from "../pages/HomePage/HomePage";
import RecipePage from "../pages/RecipePage/RecipePage";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "./privetRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: ":mealId",
        element: <PrivetRoute><RecipePage></RecipePage></PrivetRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/meals/${params.mealId}`)
      }
    ],
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: "/register",
    element:<Register></Register>
  }
]);

export default router;
