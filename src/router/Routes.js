import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homes/Home";
import Main from "../layout/Main";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import AddServices from "../pages/addServices/AddServices";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login",element:<Login/> },
      {path:'/signup',element:<SignUp/>},
      { path: "/addservices",element:<AddServices/> },
    ],
  },
]);
export default routes;