import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import CardDetails from "./pages/CardDetails";
import CreateBlog from "./components/CreateBlog";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { useEffect } from "react";
// json-server --watch db.json

function App() {
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogRefs = collection(db, "blogs");
      const querySnapshot = await getDocs(blogRefs);
      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(blogs);
    };

    fetchBlogs();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="blogs/blog/:id" element={<CardDetails />} />
      <Route exact path="/create-blog" element={<CreateBlog />} />
    </Routes>
  );
}

export default App;
