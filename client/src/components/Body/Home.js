import prf1 from "../../images/prf2.svg";
import { useState, useEffect } from "react";
import Topic from "../NewsTopic";
import link from "../../images/link.svg";
import { convertLength } from "@mui/material/styles/cssUtils";

export default function HomePage() {
  const [news, setNews] = useState([]);
  var file_name;
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=31231c54ff9c49ab839c035b5ef014c1";

  useEffect(() => {
    const getNews = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setNews(data.articles);
    };
    getNews();
  }, []);

  return (
    <>
      <div className="main_body bg-gray-200 basis-11/12 flex ">
        <div className="sidebar ml-2 flex p-4  gap-4 items-center">
          <div className="profile h-full flex flex-col items-center rounded-lg bg-white shadow-lg drop-shadow-lg p-4">
            <img
              src={prf1}
              alt="profile"
              className="sidebar_profile border-custom_white mt-4 bg-white shadow-md rounded-full"
            />
            <div className="flex w-full flex-col items-center my-4">
              <h1 className="text-xl font-semibold">Rohit Sekh</h1>
              <p className="mt-2 text-base ">State, India</p>
              <p className="p-2 my-7 font-main">
                Intro Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Odio officia et quod sapiente. Tempora ducimus adipisci
                voluptatem!
              </p>
            </div>
          </div>
        </div>
        {/* <p className="flex self-center w-1 h-3/4 text-center bg-gray-400 rounded-md" /> */}
        <div className="__body p-6">
          <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
              <div className="flex items-center justify-between px-3 py-2 border-b ">
                <div className="flex flex-wrap items-center  sm:divide-x ">
                  <div className="flex items-center space-x-1 sm:pr-4">
                    <label
                      type="button"
                      className="p-2 flex text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <input
                        className="hidden"
                        type="file"
                        name="posted_file"
                        onChange={(e) => {
                          file_name = e.target.files[0].name;
                          
                        }}
                      />
                      <span className="">hi, {file_name}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white rounded-b-lg ">
                <label htmlFor="editor" className="sr-only">
                  Publish post
                </label>
                <textarea
                  id="editor"
                  rows="8"
                  className="font-main block w-full text-sm font-medium text-gray-800 bg-white border-0 resize-none p-2"
                  placeholder="Write an article..."
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex font-main items-center px-5 py-2.5 text-sm font-semibold text-center text-black bg-custom_orng rounded-lg focus:ring-4 focus:ring-blue-200 hover:text-white"
            >
              Post Story
            </button>
          </form>
          <div className="education mt-5">this </div>
        </div>
        <p className="flex self-center w-1 h-3/4 text-center bg-gray-400 rounded-md" />
        <div className="sidebar ml-2 flex flex-col p-4 gap-4">
          <div className="suggestion basis-1/4 text-center bg-white rounded-md shadow-md drop-shadow-md">
            <p className="font-main text-xl font-bold">Profile Suggestion</p>
          </div>
          <div className="news basis-3/4 bg-red-100 rounded-md shadow-md drop-shadow-md p-3 font-main">
            <div className="header flex gap-3 ">
              <p className="w-3 h-3 bg-red-800 self-center rounded-full" />
              <h1 className="text-lg font-semibold">Today's headline</h1>
            </div>
            <div className="py-2 px-4 gap-3 flex flex-col text-sm font-medium">
              {news.slice(0, 12).map((item, id) => (
                <Topic key={id} title={item.title} url={item.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
