import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateBlog from "../pages/CreateBlog";

import EditBlog from "../pages/EditBlog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Search from "../pages/Search";
import SingleBlog from "../pages/SingleBlog";
import PrivateRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog/:blogId",
        element: <SingleBlog></SingleBlog>,
      },
      {
        path: "/profile/:profileId",
        element: <Profile></Profile>,
      },
      {
        path: "/createBlog",
        element: (
          <PrivateRoutes>
            <CreateBlog></CreateBlog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/editBlog/:id",
        element: (
          <PrivateRoutes>
            <EditBlog></EditBlog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
    ],
  },
]);
