import { useState } from "react";

export default function Learn() {

  const AllLink = []

  const [link, setLink] = useState("");

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    AllLink.push(link);
    console.log(AllLink);
    setLink('');
  };

  return (
    <div className="main_body bg-gray-300 basis-11/12 flex justify-center p-6">
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
        className="h-12 w-20 px-3 py-1 drop-shadow-lg active:drop-shadow-none active:bg-inherit bg-white rounded-3xl"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div></div>
  );
}
