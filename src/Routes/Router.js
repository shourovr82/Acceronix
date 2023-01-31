import { createBrowserRouter } from "react-router-dom";
import AcceronixLayout from "../Layout/AcceronixLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
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
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
])

export default router;