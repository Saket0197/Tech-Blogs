import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import BlogInfo from "./BlogInfo";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function MainBlog() {
  const { blog, relatedBlogs, loading } = useContext(AppContext);
  const navigate = useNavigate();

  return loading ? (
    <div className="dark:text-[#fff] font-bold text-2xl flex justify-center items-center w-100vw h-screen">
      LOADING...
    </div>
  ) : !relatedBlogs.length ? (
    <div className="dark:text-[#fff] font-bold text-2xl flex justify-center items-center w-100vw h-screen">
      No Blogs Found
    </div>
  ) : (
    <div className="md:max-w-[90vw] py-4 mt-6 min-h-screen max-w-[80vw] mx-auto gap-8 flex flex-col justify-evenly">
      <div className="flex justify-start">
        <Button onclick={() => navigate(-1)} buttonText={"Back"} />
      </div>
      <BlogInfo post={blog} />
      <h2 className="text-4xl font-bold dark:text-[#fff] tracking-wider">
        Related Blogs
      </h2>
      {relatedBlogs.map((eachBlog) => (
        <BlogInfo key={eachBlog.id} post={eachBlog} />
      ))}
    </div>
  );
}
