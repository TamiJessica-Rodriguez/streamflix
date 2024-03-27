import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import { BookmarkedContextProvider } from "./context/BookmarkedContext";
import Bookmarked from "./pages/Bookmarked";
import InfoPage from "./pages/InfoPage";
import PreviewPage from "./pages/PreviewPage";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path="PreviewPage" element={<PreviewPage />} />
      <Route path="InfoPage/:movieId" element={<InfoPage />} />
      <Route path="Bookmarked" element={<Bookmarked />} />
      <Route path="*" element={<span>The page does not exist..</span>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookmarkedContextProvider>
      <RouterProvider router={router} />
    </BookmarkedContextProvider>
  </React.StrictMode>
);
