import { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";


export default function Learn() {
  const [allLinks, setAllLinks] = useState([
    "https://www.geeksforgeeks.org/c-plus-plus/",
    "https://www.geeksforgeeks.org/java",
    "https://www.geeksforgeeks.org/javascript/",
     
  ]);

  const [link, setLink] = useState("");

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllLinks((prevLinks) => [...prevLinks, link]);
    console.log(allLinks);
    setLink("");
  };

  return (
    <div className="main_body bg-custom_bg basis-11/12 flex items-center p-6 flex-col gap-4">
      <div className="w-full flex justify-center gap-4">
        <input
          className="h-12 w-3/4 rounded-3xl focus:outline-none border-2 border-black ml-5 px-3 py-1 font-semibold text-sm text-custom_black"
          type="text"
          name="link"
          placeholder="Search"
          value={link}
          onChange={handleLinkChange}
        />
        <button
          type="submit"
          className="h-12 w-20 px-3 py-1 shadow-lg drop-shadow-lg active:drop-shadow-none active:bg-inherit bg-white rounded-3xl"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div className="text-lg font-medium font-mono">
        {allLinks.map((link, index) => (
          <h1 className="underline decoration-indigo-600" key={index}>
            <a href={link}>{link}</a>
          </h1>
        ))}
      </div>
    </div>
  );
}
