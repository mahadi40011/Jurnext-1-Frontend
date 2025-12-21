import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import AllTicket from "../pages/AllTicket/AllTicket";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddTicket from "../pages/Dashboard/Vendor/AddTicket";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Common/Profile";
import TicketDetails from "../pages/TicketDetails/TicketDetails";
import BookedTicket from "../pages/Dashboard/Customer/BookedTicket";
import MyAddedTickets from "../pages/Dashboard/Vendor/MyAddedTickets";
import RequestedBookings from "../pages/Dashboard/Vendor/RequestedBookings";
import ManageTickets from "../pages/Dashboard/Admin/ManageTickets";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import RevenueOverview from "../pages/Dashboard/Vendor/RevenueOverview";
import AdvertiseTickets from "../pages/Dashboard/Admin/AdvertiseTickets";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import TransactionHistory from "../pages/Dashboard/Customer/TransactionHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-ticket",
        element: (
          <PrivateRoute>
            <AllTicket />
          </PrivateRoute>
        ),
      },
      {
        path: "tickets/:id",
        element: (
          <PrivateRoute>
            <TicketDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "revenue-overview",
        element: (
          <PrivateRoute>
            <RevenueOverview />
          </PrivateRoute>
        ),
      },
      {
        path: "add-ticket",
        element: (
          <PrivateRoute>
            <AddTicket />
          </PrivateRoute>
        ),
      },
      {
        path: "booked-tickets",
        element: (
          <PrivateRoute>
            <BookedTicket />
          </PrivateRoute>
        ),
      },
      {
        path: "transaction-history",
        element: (
          <PrivateRoute>
            <TransactionHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "added-ticket",
        element: (
          <PrivateRoute>
            <MyAddedTickets />
          </PrivateRoute>
        ),
      },
      {
        path: "requested-bookings",
        element: (
          <PrivateRoute>
            <RequestedBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-ticket",
        element: (
          <PrivateRoute>
            <ManageTickets />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "advertise-tickets",
        element: (
          <PrivateRoute>
            <AdvertiseTickets />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
