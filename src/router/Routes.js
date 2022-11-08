import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homes/Home";
import Main from "../layout/Main";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import AddServices from "../pages/addServices/AddServices";
import Services from "../pages/services/Services";
import ServicesDetail from "../pages/services/ServicesDetail";
import Blogs from "../pages/blogs/Blogs";
import PrivateRoutes from "../private/PrivateRoutes";
import MyReview from "../pages/myreview/MyReview";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/addservices",
        element: (
          <PrivateRoutes>
            <AddServices />
          </PrivateRoutes>
        ),
      },
      { path: "/services", element: <Services /> },
      {
        path: "/services/:id",
        element: <ServicesDetail />,
        loader: ({ params }) =>
          fetch(`https://sh-tourist-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,

      },
      {
        path:'/review',
        element:<PrivateRoutes><MyReview/></PrivateRoutes>
      }
    ],
  },
]);
export default routes;
