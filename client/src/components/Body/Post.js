import React, { useState, useEffect } from "react";
import sample2 from "../../images/prf1.svg";
import { Buffer } from "buffer";

export default function Post({ postedImage, postedText, username }) {
  const [more, setMore] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (postedImage) {
      const base64String = Buffer.from(postedImage.data).toString("base64");
      setImageSrc(`data:image/jpeg;base64,${base64String}`);
    }
  }, [postedImage]);

  return (
    <>
      <div className="post bg-white shadow-md dark-shadow-md rounded-md flex w-full flex-col p-4  flex-wrap font-main gap-2">
        <div className="flex justify-end items-center gap-1">
          <p className="text-xs font-semibold">{username}</p>
          <img className="w-10 h-10" src={sample2} alt="" />
        </div>
        <button
          className="w-full"
          onClick={function () {
            setMore(!more);
          }}
        >
          <p
            className={`${
              more ? "" : "truncate"
            } w-full flex justify-start text-sm`}
          >
            {postedText}
          </p>
        </button>
        {imageSrc && (
          <img className="rounded-md shadow-md mt-3 posted_img" src={imageSrc} alt="" />
        )}
      </div>
    </>
  );
}