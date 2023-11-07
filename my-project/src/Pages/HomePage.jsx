import React, { useContext , useEffect } from 'react';
import Header from '../Component/Header';
import Blogs from '../Component/Blogs';
import Footer from '../Component/Footer';
import { AppContext } from '../Context/AppContext';

function HomePage() {
    const { fetchData, totalPage } = useContext(AppContext);
    
    useEffect(() => {
      fetchData();
    }, []);
  
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
}

export default HomePage
