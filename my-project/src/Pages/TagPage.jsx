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
          <div>
              <button onClick={() => navigation(-1)}>Back</button>
              <h2>
                  Blogged Tagged <span>#{tag}</span>
              </h2>
          </div>
          <Blogs />
          <Footer/>
    </div>
  )
}

export default TagPage
