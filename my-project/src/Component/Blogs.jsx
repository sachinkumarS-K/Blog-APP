import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Loading from "./Loading/Loading";
import BlogDetails from "./BlogDetails";
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
          <BlogDetails key={post.id} post={post}/>
        ))
      )}
    </div>
  );
}

export default Blogs;
