import React from 'react'
import { NavLink } from 'react-router-dom';

function BlogDetails({post}) {
  return (
    <div>
      <div key={post.id}>
        <NavLink to={`/blog/${post.id}`}>
          <p className="font-bold text-s">{post.title} </p>
        </NavLink>

        <p className="text-[15px] pt-1">
          By
          <span className="italic px-">
            {post.author} on
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
              <span className="px-1 font-bold">{post.category} </span>
            </NavLink>
          </span>
        </p>

        <p>Posted on {post.date} </p>
        <p className="text-centre">{post.content}</p>
        <div className="text-centre text-blue-300">
          {post.tags.map((tag, idx) => (
            <NavLink key={idx} to={`/tags/${tag}`}>
              <span className="px-1 text-sm font-bold underline ">
                {" "}
                {`#${tag}`}{" "}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails
