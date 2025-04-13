import { Outlet } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

function RootLayout() {
  useDarkMode();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Dota Analyzer</h1>
      </header>
      <main className="p-4 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
