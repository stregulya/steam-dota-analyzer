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
        loader: async ({ params }) => {
          const { itemId } = params;
          const res = await fetch(
            `http://localhost:3001/api/steam-item?market_hash_name=${itemId}`
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
