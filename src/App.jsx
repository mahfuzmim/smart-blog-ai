import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import CardDetails from "./pages/CardDetails";
import CreateBlog from "./components/CreateBlog";
// json-server --watch db.json

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="blogs/blog/:id" element={<CardDetails />} />
      <Route exact path="/create-blog" element={<CreateBlog />} />
    </Routes>
  );
}

export default App;
