import { useState, useEffect } from "react";
import Topic from "./NewsTopic";

export default function SideBar() {
  const [news, setNews] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

  useEffect(() => {
    const getNews = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setNews(data.articles);
    };
    getNews();
  }, []);

  return (
    <div className="sidebar ml-2 flex flex-col p-4 gap-6">
      <div className="suggestion basis-1/4 text-center bg-white rounded-md shadow-md drop-shadow-md mt-2">
        <p className="font-main text-xl font-bold m-5">Profile Suggestion</p>
      </div>
      <div className="news basis-3/4 bg-white rounded-md shadow-md drop-shadow-md p-3 font-main">
        <div className="header flex gap-3 ">
          <h1 className="text-xl p-4 pt-2 font-bold">Today's headline</h1>
        </div>
        <div className="py-2 px-4 gap-3 flex flex-col text-sm font-medium">
          {news.slice(0, 11).map((item, id) => (
            <Topic key={id} title={item.title} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
