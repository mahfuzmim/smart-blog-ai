import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { showBlogs } from "../features/blogSlice";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

const Cards = () => {
  const { blogs, loading } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const tagsArr = blogs.map((item, i) => item.tags);
  console.log(tagsArr);

  useEffect(() => {
    dispatch(showBlogs());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto px-4 mb-8 md:mb-12  flex justify-end">
        <Button className="bg-lime-600">
          Create New <FaPlus />
        </Button>
      </div>
      <div className="grid gap-4 container px-4 mx-auto pb-4 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.length > 0 &&
          blogs.map((blog, i) => (
            <Card className="w-full max-w-2xl py-2" key={blog.id}>
              <CardHeader>
                <CardTitle>
                  <p className="text-lg">{blog.title}</p>
                </CardTitle>
                <CardDescription className="mt-2">
                  {" "}
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-auto aspect-square object-cover
"
                />
                <p>{blog.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link">Read More</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Cards;
