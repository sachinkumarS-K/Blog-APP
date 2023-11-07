import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import Header from '../Component/Header.jsx';
import Footer from '../Component/Footer.jsx';
import Loading from "../Component/Loading/Loading.jsx";
import BlogDetails from '../Component/BlogDetails.jsx';
function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRealtedBlog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
    //console.log(url)
    try {
      const response = await axios.get(url);
      console.log("response", response.data);
      setBlog(response.data.blog);
      setRealtedBlog(response.data.relatedBlogs);
    } catch (error) {
      console.log("Error", error);
      setBlog(null);
      relatedBlog([])
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  } , [location.pathname])
  return (
    <div>
      <Header />

      {loading ? (
        <Loading />
      ) : blog ? (
        <div className="w-11/12 max-w-[670px] mx-auto flex flex-col gap-y-10 my-4 mb-[6rem]">
          <div>
            <button
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
              onClick={() => navigation(-1)}
            >
              Back
            </button>
          </div>
          <BlogDetails post={blog} />
          <h2 className="text-4xl font-bold ">Related Blogs</h2>
          {relatedBlog.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p> No blog found </p>
      )}
      
    </div>
  );
}

export default BlogPage
