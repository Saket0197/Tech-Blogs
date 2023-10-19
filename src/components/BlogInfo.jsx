import React from "react";
import { NavLink } from "react-router-dom";

export default function BlogInfo({ post }) {
  return (
    <div className="flex flex-col gap-2 mr-2">
      <NavLink
        className="font-bold text-xl dark:text-[#fff] underline w-fit"
        to={`/blog/${post.id}`}
      >
        {post.title}
      </NavLink>
      <p className="dark:text-[#fff]">
        By <span className="italic dark:text-[#e9e3e3]">{post.author} </span>
        On{" "}
        <NavLink
          className="font-medium dark:text-[#ffffffb0]  underline"
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
        >
          {post.category}
        </NavLink>
      </p>
      <p className="dark:text-[#fff]">Posted On {post.date}</p>
      <p className="md:max-w-[92%] dark:text-[#fff] max-w-[70%]">
        {post.content}
      </p>
      <div className="flex gap-3 over flex-wrap">
        {post.tags.map((tag, index) => (
          <NavLink
            className="underline text-[rgb(57,65,182)] dark:text-[rgb(85,148,243)]"
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
