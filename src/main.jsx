import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "src/pages/HomePage";
import { ShopCategoryPage } from "src/pages/ShopCategoryPage";
import { ProductDetailPage } from "src/pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/shop-category",
    element: <ShopCategoryPage />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
