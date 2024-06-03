import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import Login from "../pages/authentication/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>This is home</h1>,
  },

  {
    path: "/landing-page",
    element: <LandingPage/> ,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

export default router;