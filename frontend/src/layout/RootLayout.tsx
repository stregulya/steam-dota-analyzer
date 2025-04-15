import { Link, Outlet } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

function RootLayout() {
  useDarkMode();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 border-b border-gray-700">
        <Link to="/">
          <h1 className="text-xl font-bold">Dota Analyzer</h1>
        </Link>
      </header>
      <main className="p-4 w-[1024px] mx-auto box-border">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
