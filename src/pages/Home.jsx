import React, { useEffect } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import axios from "axios";

export const Home = () => {
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
    <>
      <Header />
      <Cards />
    </>
  );
};
