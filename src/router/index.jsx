import {
  createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>This is home</h1>,
  },
  {
    path: "/other",
    element: <h1>This is other page</h1>,
  },
]);

export default router;