import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";
import Cards from "./components/Cards";

function App() {
  const API_URL = "http://localhost:3000/blogs";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log(response.data); // The actual data is in response.data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
}

export default App;
