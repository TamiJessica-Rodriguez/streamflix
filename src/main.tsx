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
import { RatingProvider } from "./context/RatingContext";
import Bookmarked from "./pages/Bookmarked";
import PreviewPage from "./pages/PreviewPage";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path="PreviewPage" element={<PreviewPage />} />
      <Route path="Bookmarked" element={<Bookmarked />} />
      <Route path="*" element={<span>The page does not exist..</span>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookmarkedContextProvider>
      <RatingProvider>
        <RouterProvider router={router} />
      </RatingProvider>
    </BookmarkedContextProvider>
  </React.StrictMode>
);
