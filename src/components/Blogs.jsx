import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import BlogInfo from "./BlogInfo";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Blogs() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { posts, loading } = useContext(AppContext);
  return loading ? (
    <div className="dark:text-[#fff] font-bold text-2xl flex justify-center items-center w-100vw h-screen">
      LOADING...
    </div>
  ) : !posts.length ? (
    <div className="dark:text-[#fff] font-bold text-2xl flex justify-center items-center w-100vw h-screen">
      No Blogs Found
    </div>
  ) : (
    <div className="md:max-w-[90vw] mt-4 max-w-[80vw] mx-auto gap-8 flex flex-col justify-start p-4 min-h-[75vh]">
      {pathname.includes("tags") ? (
        <div className="sm:items-baseline flex items-center gap-4">
          <Button onclick={() => navigate(-1)} buttonText={"Back"} />
          <p className="sm:flex sm:flex-col text-2xl dark:text-[#fff] font-semibold">
            Blogs Tagged
            <span className="text-2xl text-[rgb(57,65,182)] dark:text-[rgb(85,148,243)] underline ml-1">
              {` #${pathname.split("/").at(-1).replaceAll("-", " ")}`}
            </span>
          </p>
        </div>
      ) : (
        pathname.includes("categories") && (
          <div className="flex items-center gap-4">
            <Button onclick={() => navigate(-1)} buttonText={"Back"} />
            <p className="text-2xl dark:text-[#fff] font-semibold">
              Blogs On
              <span className="underline ml-1">
                {pathname.split("/").at(-1).replaceAll("-", " ")}
              </span>
            </p>
          </div>
        )
      )}
      {posts.map((post) => (
        <BlogInfo post={post} key={post.id} />
      ))}
    </div>
  );
}
