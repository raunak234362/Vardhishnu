import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";

import { Suspense } from "react";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
createRoot(rootElement).render(
  <>
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen w-screen ">
          <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </>,
);
