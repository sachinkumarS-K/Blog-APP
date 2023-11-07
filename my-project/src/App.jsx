import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import {Route , Routes, useLocation, useSearchParams} from 'react-router-dom'
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
function App() {
  const {fetchData} = useContext(AppContext)
  const [searchParam, setSearchParams] = useSearchParams();
  const loaction = useLocation();
  //console.log(loaction)
  useEffect(() => {
    const page = searchParam.get("page") ?? 1;
    console.log(page)
    if (location.pathname.includes('tags')) {
      const tag = loaction.pathname.split('/').at(-1);
      fetchData(Number(page) , tag)
    }
    else if (loaction.pathname.includes("categories")) {
      const category = loaction.pathname.split('/').at(-1).replaceAll('-', " ");
      //console.log(category)
      fetchData(Number(page), null, category);
    }
    else {
      fetchData(Number(page))
    }
  } , [loaction.pathname , loaction.search])
  return (
    <Routes>
      <Route path="/" element = {<HomePage/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<CategoryPage/>} />
    </Routes>
  );
}

export default App;
