import React from "react";
import { Input } from "@/components/ui/input";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto  px-4 py-8 md:py-12">
        <div className="grid items-center grid-cols-1  md:grid-cols-2 gap-4">
          <div className="comic-neue-regular">
            <p
              className="text-center md:text-left text-3xl
             md:text-5xl cursor-pointer"
              onClick={() => navigate("/")}
            >
              SmartBlog.Ai{" "}
            </p>
          </div>
          <div>
            <Input
              className="h-[3rem]"
              type="text w-full md:w-auto"
              placeholder="Search blogs..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
