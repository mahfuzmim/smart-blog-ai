import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Badge } from "@/components/ui/badge";

const CardDetails = () => {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState();

  useEffect(() => {
    const getBlog = async () => {
      const response = await axios.get(`http://localhost:3000/blogs/?id=${id}`);
      console.log(response.data);
      setCardDetails(response.data[0]);
    };

    getBlog();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-1 md:px-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <img src={cardDetails?.coverImage} />
          </div>
          <div>
            <div className="mt-4 md:mt-0">
              <p className="text-2xl text-center">{cardDetails?.title}</p>
            </div>
            <div className="grid grid-cols-2 mt-4 md:mt-8">
              <p className="text-left ">
                <Badge variant="secondary" className="text-base">
                  Author: {cardDetails?.author}
                </Badge>
              </p>
              <p className="text-right">
                <Badge variant="secondary" className="text-base">
                  Date: {cardDetails?.date}
                </Badge>
              </p>
            </div>
            <div className="mt-6 mb:mt-12">
              <p className="text-base text-center md:text-left">
                {cardDetails?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
