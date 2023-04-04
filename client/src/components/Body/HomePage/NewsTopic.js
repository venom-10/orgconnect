import React from "react";
import link from "../../../images/link.svg";

export default function NewsTopic(p) {
  const { title, url } = p;
  return (
    <>
      <div className="flex items-center">
        <p className="truncate text-center w-11/12">
          <p className="w-2 h-2 rounded-full bg-custom_orng inline-block mr-1" />
          {title}
        </p>
        <a
          className="w-1/12 flex justify-center"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-3 h-3" src={link} alt="url_icon" />
        </a>
      </div>
    </>
  );
}