import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateProduct from "@/pages/dashboard/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard/create-product",
    element: <CreateProduct />,
  },
]);

export default router;
