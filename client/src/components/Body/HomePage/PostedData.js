import { useEffect, useState } from "react";
import Post from "../Post";




export default function PostedData() {
  const [postedData, setPostedData] = useState([])
  
  useEffect(()=>{
    const getAllData = async ()=>{
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API}/getData`, {
        method: "GET"
      });
      const data = await res.json()
      setPostedData(data);
    }
    getAllData()
  }, [])

  return (
    <div className="education mt-5 flex flex-col gap-4">
      {postedData.map((data)=>(
        <Post 
          key={data._id}
          postedImage={data.postedImage}
          postedText={data.postedText}
          username  ={data.username}
        />)
      )}
    </div>
  );
}
