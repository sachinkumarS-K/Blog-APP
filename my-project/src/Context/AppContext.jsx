import { createContext, useState } from "react";
import { url } from "../baseUrl";
import axios from 'axios'
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    async function fetchData(page = 1 , tag = null , category) {
        setLoading(true);
        let baseUrl = `${url}?page=${page}`;
        if (category) {
            baseUrl+= `&category=${category}`
        }
        if (tag) {
            baseUrl += `&tag=${tag}`;
        }
        try {
            
            const response = await axios.get(baseUrl);
            console.log(response.data);
            setPage(response.data.page);
            setData(response.data.posts);
            setTotalPage(response.data.totalPages);


        } catch (error) {
            console.log(error.message);
            setData([]);
            setPage(1);
            setTotalPage(null);
        }
         setLoading(false);
    }

    function handlerPageChange(page) {
        setPage(page);
        fetchData(page);
    }


    const value = {
      loading,
      setData,
      setLoading,
      setTotalPage,
      setPage,
      data,
      totalPage,
      page,
      handlerPageChange,
      fetchData
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}