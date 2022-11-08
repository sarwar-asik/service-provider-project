import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homes/Home";
import Main from "../layout/Main";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import AddServices from "../pages/addServices/AddServices";
import Services from "../pages/services/Services";
import ServicesDetail from "../pages/services/ServicesDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/addservices", element: <AddServices /> },
      { path: "/services", element: <Services /> },
      {
        path: "/services/:id",
        element: <ServicesDetail />,
        loader: ({ params }) =>
          fetch(`https://sh-tourist-server.vercel.app/services/${params.id}`),
      },
    ],
  },
]);
export default routes;
