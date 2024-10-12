import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import CountryPage from "./pages/CountryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import App from "./App.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/country/:countryName",
        element: <CountryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
