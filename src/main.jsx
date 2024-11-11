import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SingUp from "./Components/Login/SingUp";
import Policies from "./Components/policies/policies";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import AllProduct from "./Components/Products/AllProduct/AllProduct";
import Statistics from "./Components/Statistics/Statistics";
import "./index.css";
import Root from "./Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../Categories.json"),
        children: [
          {
            path: "",
            element: <AllProduct></AllProduct>,
            loader: () => fetch("../Data.json"),
          },
          {
            path: "/Product/:Category",
            element: <AllProduct></AllProduct>,
            loader: () => fetch("../Data.json"),
          },
        ],
      },
      {
        path: "/Details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../Data.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../Data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../Data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/Policy",
        element: <Policies></Policies>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
