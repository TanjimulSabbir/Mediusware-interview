import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import App from "../App";
import BlogDetails from "../components/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
