import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import AboutUs from "../pages/AboutUs/AboutUs";
import PageLayout from "../layouts/PageLayout/PageLayout";





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },

    ]
  },
  {
    path: "/about",
    element: <PageLayout></PageLayout>,
    children: [
      {
        path: "/about/about-us",
        element: <AboutUs></AboutUs>
      },


    ]
  },





  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  },






]);

export default router;