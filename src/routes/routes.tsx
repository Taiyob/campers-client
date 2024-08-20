import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateProduct from "@/pages/dashboard/CreateProduct";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import CreateCategory from "@/pages/dashboard/CreateCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardHome />,
    children: [
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "create-category",
        element: <CreateCategory />,
      },
    ],
  },
]);

export default router;
