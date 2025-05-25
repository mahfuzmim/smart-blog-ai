import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      const response = await axios.get(`http://localhost:3000/blogs/?id=${id}`);
      console.log(response.data);
    };

    getBlog();
  }, []);

  return <div></div>;
};

export default CardDetails;
