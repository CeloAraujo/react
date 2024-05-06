import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// pagina de erro
import ErrorPage from "./routes/ErrorPage.jsx";
// routers
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contact from "./routes/Contact.jsx";

// 3-componente base
import Home from "./routes/Home.jsx";

// 7-rota dinamica
import Product from "./routes/Product.jsx";
// 8 nested route
import Info from "./routes/Info.jsx";
// 9 -search params
import Search from "./routes/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3-componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7- rota dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      // 8 rota aninhada (nested route)
      {
        path: "/products/:id/info",
        element: <Info />,
      },
      // 9- search
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
