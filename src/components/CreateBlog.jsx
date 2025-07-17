import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { createBlog } from "../features/blogSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const CreateBlog = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [blogContentObj, setBlogContentObj] = useState({});
  const dispatch = useDispatch();

  const handlePicUpload = (e) => {
    console.log(e.target.files);

    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      console.log(reader);

      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click(); // trigger file input click
  };

  const removeImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input
    }
  };

  const handleInput = (e) => {
    setBlogContentObj({
      ...blogContentObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateButton = async (e) => {
    e.preventDefault();
    dispatch(createBlog(blogContentObj));

    const response = await axios.post("http://localhost:3000/blogs", {
      blogContentObj,
    });
  };

  return (
    <>
      <Header />
      <div className="container grid grid-cols-1 px-2 mx-auto">
        <Card className="w-full md:w-3/4 mx-auto ">
          <div className="w-full  md:w-4/5 px-2  mx-auto ">
            <div
              className=" grid grid-rows-2 w-full
            py-2 justify-center justify-items-center gap-12 
            px-2 h-[9em]   border-2 rounded-sm border-ring  
            border-dotted"
            >
              {selectedFile ? (
                selectedFile.name
              ) : (
                <IoCloudUploadOutline size={40} className="text-gray-500" />
              )}{" "}
              <label>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePicUpload}
                  ref={fileInputRef}
                />
                {selectedFile ? (
                  <Button variant="destructive" onClick={removeImage}>
                    Remove
                  </Button>
                ) : (
                  <Button variant="outline" onClick={handleButtonClick}>
                    Upload Image
                  </Button>
                )}
              </label>
            </div>
          </div>
          <div className="w-full md:w-4/5 px-2 mx-auto">
            <div className=" grid grid-cols-1 gap-1.5 ">
              <Label className="text-base">Title</Label>
              <Textarea
                name="title"
                value={blogContentObj.title}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="w-full md:w-4/5  px-2 mx-auto">
            <div className="grid grid-cols-1 gap-1.5 ">
              <Label htmlFor="message" className="text-base">
                Content
              </Label>
              <textarea
                rows={10}
                className="flex min-h-[60px] w-full 
                rounded-md border border-input bg-transparent 
                px-3 py-2 text-base shadow-sm 
                placeholder:text-muted-foreground 
                focus-visible:outline-none focus-visible:ring-1 
                focus-visible:ring-ring disabled:cursor-not-allowed 
                disabled:opacity-50 md:text-sm"
                value={blogContentObj.content}
                onChange={handleInput}
                name="content"
              />
            </div>
          </div>
          <div className="w-full md:w-4/5  px-2 mx-auto">
            <Label className="text-base">Tags:</Label>
          </div>
          <div className="text-right mx-auto"></div>
        </Card>
        <div className=" mt-4 mx-auto px-4 mb-8 md:mb-12  flex justify-end">
          <Button
            className="bg-lime-600"
            type="button"
            onClick={handleCreateButton}
          >
            Create
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
