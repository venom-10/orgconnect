import { useState } from "react";
import SideBar from "./SideBar";
import ProfileSidebar from "./ProfileSidebar";
import PostedData from "./PostedData";

export default function HomePage() {
  const [name, setName] = useState();
  const [postedText, setPostedText] = useState("");
  const [postedImage, setPostedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('click')
    const formData = new FormData();
    formData.append("username", "anonymous");
    formData.append("postedText", postedText);
    formData.append("postedImage", postedImage);
    try {
      const data = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      const res = await data.text();
      console.log(res);
    } catch (err) {
      console.log('err',err);
    }
    setPostedImage(null)
    setPostedText('')
    setName('')
  };

  return (
    <>
      <div className="body bg-gray-200 basis-11/12 flex ">
        <ProfileSidebar />
        <p className="mt-14 w-1 h-2/3 text-center bg-gray-400 rounded-md" />
        <div className="__body p-6">
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-4 border border-gray-300 rounded-lg bg-gray-50 shadow-lg drop-shadow-lg">
              <div className="flex items-center justify-between px-3 py-2 border-b ">
                <div className="flex flex-wrap items-center  sm:divide-x ">
                  <div className="flex items-center space-x-1 sm:pr-4 flex-col">
                    <label
                      type="button"
                      className="p-2 flex text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-50"
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
                        accept="image/png, image/gif, image/jpeg"
                        name="postedImage"
                        onChange={(e) => {
                          setPostedImage(e.target.files[0]);
                          setName(e.target.files[0].name);
                        }}
                      />
                      <span className="ml-2 font-medium font-main">{name}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white rounded-b-lg ">
                <label htmlFor="editor" className="sr-only">
                  Publish post
                </label>
                <textarea
                  value={postedText}
                  onChange={(e) => {
                    setPostedText(e.target.value);
                  }}
                  className="font-main block w-full text-md font-medium text-gray-800 bg-white border-0 resize-none p-2 focus:outline-none"
                  placeholder="Write an article..."
                  required
                  autoFocus={true}
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

          <PostedData />
          <PostedData />
        </div>
        <p className="mt-14 w-1 h-2/3 text-center bg-gray-400 rounded-md" />
        <SideBar />
      </div>
    </>
  );
}
