import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Card from "./Card";
import Loading from "./Loading/Loading";
function Blogs() {
  const { data, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] mx-auto flex flex-col gap-y-10 my-4 mb-[6rem]">
      {loading ? (
        <Loading />
      ) : data.length == 0 ? (
        <h2>No post found</h2>
      ) : (
        data.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-s">{post.title} </p>
            <p className="text-[15px] pt-1">
              By
              <span className="italic">
                {post.author} on <span>{post.category} </span>
              </span>
            </p>
            <p>Posted on {post.date} </p>
            <p className="text-centre">{post.content}</p>
            <div className="text-centre text-blue-300">
              {post.tags.map((tag, idx) => (
                <span className="px-1 text-sm font-bold underline " key={idx}> {`#${tag}`} </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
