import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";

// 5-contexto mais complexo
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

// routers
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// 2- criando provider
import { CounterContextProvider } from "./context/CounterContext.jsx";

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
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
      <RouterProvider router={router}/>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
