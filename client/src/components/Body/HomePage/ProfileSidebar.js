import prf1 from "../../../images/prf2.svg";
import { useState, useEffect } from 'react';
import { Buffer } from "buffer";

export default function ProfileSidebar() {
  const [userData, setUserData] = useState("")
  const [imageSrc, setImageSrc] = useState("");

  useEffect(()=>{
    const email = sessionStorage.getItem('email')
    const getUserData = async ()=>{
      const res = await fetch(`/getUser?email=${email}`, {
        method:'GET'
      });

      const data = await res.json();
      setUserData(data);
    }

    const getUserImage = async ()=>{
      const res = await fetch(`/getUserImage?email=${email}`, {
        method:'GET'
      });

      const data = await res.json();
      if(data){
        const base64String = Buffer.from(data.data).toString("base64");
        setImageSrc(`data:image/jpeg;base64,${base64String}`);
      }
    }
    getUserData()
    getUserImage()
  }, [])
  return (
    <div className="sidebar ml-2 flex p-4 gap-4 items-center ">
      <div
        className="profile h-full flex flex-col items-center rounded-lg bg-color2 shadow-lg drop-shadow-lg p-6"
        style={{ width: "3010px" }}
      >
        <img
          src={imageSrc?imageSrc:prf1}
          alt="profile"
          className="sidebar_profile border-custom_white mt-4 bg-white shadow-md rounded-full"
        />
        <div className="flex w-full flex-col items-center my-4 text-custom_white">
          <h1 className="text-xl font-semibold">
            {userData ? userData[0]?.firstName.charAt(0).toUpperCase() + userData[0]?.firstName.slice(1) : ""} { userData ? userData[0]?.lastName : "" }
          </h1>
          <p className="mt-2 text-base ">
            {" "}
            {userData ? userData[0]?.city : ""},{" "}
            {userData ? userData[0]?.state : ""}
          </p>
          <p className="p-2 my-7 text-center font-main">
            { userData ? userData[0]?.intro : "" }
          </p>
        </div>
      </div>
    </div>
  );
}
