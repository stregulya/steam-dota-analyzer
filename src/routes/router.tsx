import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import HeroPage from "../pages/HeroPage/HeroPage";
import ItemPage from "../pages/ItemPage/ItemPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { heroLoader } from "../pages/HeroPage/heroLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "hero/:heroId",
        element: <HeroPage />,
        loader: heroLoader,
      },
      {
        path: "hero/:heroId/:itemId",
        element: <ItemPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
