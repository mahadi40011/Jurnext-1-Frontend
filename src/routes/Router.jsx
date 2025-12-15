import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import AllTicket from "../pages/AllTicket/AllTicket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/all-ticket',
        element: <AllTicket/>
      },
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);