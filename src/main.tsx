import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Book from "./routes/book.tsx";
import LoginPage from "./routes/LoginPage.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
