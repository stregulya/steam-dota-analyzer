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
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const res = await fetch("http://localhost:3001/api/heroes");
          return res.json();
        },
      },
      {
        path: "hero/:heroName",
        element: <HeroPage />,
        loader: heroLoader,
      },
      {
        path: "hero/:heroName/:itemName",
        element: <ItemPage />,
        loader: async ({ params }) => {
          const { heroName, itemName } = params;
          const res = await fetch(
            `http://localhost:3001/api/hero/${heroName}/${itemName}`
          );
          return res.json();
        },
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
