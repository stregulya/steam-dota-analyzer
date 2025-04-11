import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Item from "./pages/Item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:heroId" element={<Hero />} />
        <Route path="/" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
