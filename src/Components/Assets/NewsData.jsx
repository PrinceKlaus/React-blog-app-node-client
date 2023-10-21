import axios from 'axios';
import { createContext, useEffect, useState } from "react";
export const NewsData = createContext();

function NewsDataa(props){
  const [data,setData] = useState("");

  useEffect(()=> {
    axios
    .get("http://react-blog-app-node.onrender.com/api/blogdata")
    // .get("http://localhost:5000/api/blogdata")
    .then((res) => 
    {setData(res.data)
    console.log(res.data)})
    .catch(err =>{
      console.log(err.message);
    })
  },[])
  return (
    <>
    {data&&<NewsData.Provider value={data}>
      {props.children}
    </NewsData.Provider>}
    </>
  );
}

export default NewsDataa;
