import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
