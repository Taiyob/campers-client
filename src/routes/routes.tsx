import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateProduct from "@/pages/dashboard/CreateProduct";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import CreateCategory from "@/pages/dashboard/CreateCategory";
import SingleProductDetails from "@/pages/SingleProductDetails";
import WishList from "@/pages/WishList";
import CartOrBasket from "@/pages/CartOrBasket";
import CheckOut from "@/pages/CheckOut";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

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
      {
        path: "/products-details",
        element: <SingleProductDetails />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/cart",
        element: <CartOrBasket />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
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
//src="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg"
