import React from 'react'
import Header from '../Component/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../Component/Blogs';
import Footer from '../Component/Footer';

function TagPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1)
  return (
    <div>
      <Header />
      <div className=" mt-3 w-11/12 max-w-[670px] mx-auto flex gap-5 items-center ">
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
        <h2 className="text-xl font-bold">
          Blogged Tagged{" "}
          <span className="underline text-blue-700">
            #{decodeURIComponent(tag.trim())}
          </span>
        </h2>
      </div>
      <Blogs />
      <Footer />
    </div>
  );
}

export default TagPage
