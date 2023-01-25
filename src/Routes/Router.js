import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Authentication/Register/Register";
import HomePage from "../Pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <Register />
  }
])

export default router;