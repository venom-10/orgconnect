import React, { useState } from "react";
import sample from "../../images/img9.avif";
import sample2 from "../../images/prf1.svg";

export default function Post() {
  const [more, setMore] = useState(false);
  return (
    <>
      <div className="post bg-white shadow-md dark-shadow-md rounded-md flex w-full flex-col p-4  flex-wrap font-main gap-2">
        <div className="flex justify-end items-center gap-4">
          <p>username</p>
          <img className="w-10 h-10" src={sample2} alt="" />
        </div>
        <button
          className="w-full"
          onClick={function () {
            setMore(!more);
          }}
        >
          <p className={`${more ? "" : "truncate"} w-full`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel
            culpa minima aliquid similique repellendus sit. Accusantium
            reiciendis dolorum accusamus est dolorem ea aliquam recusandae ad.
            Debitis aliquam fuga dolores, neque molestias hic officia quod sint
            at voluptatem quos! Reiciendis dolor ipsam omnis vel dicta eius vero
            similique quo quibusdam dolorem, doloribus nulla sapiente earum eum
            cum voluptas. Quaerat fugiat dolores sint hic alias, quis vel
            consectetur ut quae? Labore hic eius placeat, reiciendis quia
            officiis consectetur tempora deserunt quaerat culpa quasi, minima
            voluptatem beatae vel a eos veritatis ipsa accusamus ducimus ipsam
            cum velit excepturi magnam. Harum, quos ullam.
          </p>
        </button>
        <img className="rounded-md shadow-md mt-3" src={sample} alt="" />
      </div>
    </>
  );
}
