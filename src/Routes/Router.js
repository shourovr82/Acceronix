import { createBrowserRouter } from "react-router-dom";
import AcceronixLayout from "../Layout/AcceronixLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import HomePage from "../Pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AcceronixLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router;