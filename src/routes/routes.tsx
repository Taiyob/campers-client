import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateProduct from "@/pages/dashboard/CreateProduct";
import DashboardHome from "@/pages/dashboard/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardHome />,
    children: [
      {
        path: "create-product",
        element: <CreateProduct />,
      },
    ],
  },
]);

export default router;
