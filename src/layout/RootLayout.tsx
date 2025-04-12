import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <h1>Dota Analyzer</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
