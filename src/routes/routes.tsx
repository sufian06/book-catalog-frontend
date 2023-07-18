import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNewBook from "../pages/AddNewBook";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Signup from "../pages/Signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Products />,
      },
      {
        path: "/books/:id",
        element: <ProductDetails />,
      },
      {
        path: "/books/add-new-book",
        element: <AddNewBook />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default routes;
