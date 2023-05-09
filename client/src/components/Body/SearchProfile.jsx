import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import prf1 from "../../images/prf1.svg";
import { Buffer } from "buffer";

export default function SearchProfile({p}) {
  const [loading, setLoading] = useState(true);
  
  const loader = (
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  const [userData, setUserData] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  
  const {name} = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    const getUserData = async () => {
      const res = await fetch(`/getUserByName?name=${name}`, {
        method: "GET",
      });

      const data = await res.json();
      setUserData(data);
    };

    const getUserImage = async () => {
      const res = await fetch(`/getUserImageByName?name=${name}`, {
        method: "GET",
      });

      const data = await res.json();
      if (data) {
        const base64String = Buffer.from(data.data).toString("base64");
        setImageSrc(`data:image/jpeg;base64,${base64String}`);
      }
    };
    getUserData();
    getUserImage();
    setLoading(true)
  },[name]);

  return (
    <>
      <div className="main_body bg-custom_bg basis-11/12 flex justify-center items-center">
        {loading ? (
          loader
        ) : userData.length ? (
          <div className="__body p-4 flex bg-color2 m-4 rounded-lg shadow-lg drop-shadow-lg">
            <div className="flex w-2/5 flex-col p-5">
              <img
                src={imageSrc ? imageSrc : prf1}
                alt="profile"
                className="w-4/6 border-custom_white bg-white shadow-md m-4 rounded-full"
              />
              <h1 className="text-md text-custom_orng ml-5">Profile Links:</h1>
              <a
                className="text-md text-white ml-5 hover:text-custom_orng"
                href="/"
                target="_thapa"
              >
                LinkedIn
              </a>
              <a
                className="text-md text-white ml-5 hover:text-custom_orng"
                href="/"
                target="_thapa"
              >
                GitHub
              </a>
              <a
                className="text-md text-white ml-5 hover:text-custom_orng"
                href="/"
                target="_thapa"
              >
                Portfolio
              </a>
              <a
                className="text-md text-white ml-5 hover:text-custom_orng"
                href="/"
                target="_thapa"
              >
                Skype
              </a>
              <h1 className="text-md text-custom_orng m-5 mt-10">
                Research Works:
              </h1>
              <a
                className="text-md text-white ml-5 hover:text-custom_orng"
                href="/"
                target="_thapa"
              >
                Paper 1
              </a>
              <a
                className="text-md text-white ml-5 hover:text-custom_orng"
                href="/"
                target="_thapa"
              >
                Paper 2
              </a>
              <a
                className="text-md text-white ml-5 hover:text-custom_orng"
                href="/"
                target="_thapa"
              >
                Paper 3
              </a>
              <a
                className="text-md text-white ml-5 hover:text-custom_orng"
                href="/"
                target="_thapa"
              >
                Paper 4
              </a>
            </div>
            <div className="flex w-4/5 flex-col pt-14">
              <h1 className="text-3xl font-semibold text-custom_orng" id="name">
                {userData
                  ? userData[0]?.firstName.charAt(0).toUpperCase() +
                    userData[0].firstName.slice(1) +
                    " " +
                    userData[0]?.lastName
                  : null}
              </h1>
              <h1 className="text-md text-white mt-2" id="City">
                {userData[0]?.city}
                <span>, </span>
                <span id="Country">{userData[0]?.state}</span>
              </h1>
              <p className="text-lg text-custom_orng pb-3">
                {userData ? userData[0]?.intro : null}
              </p>
              <div className="flex w-full h-full flex-col pt-5">
                <h1 className="text-2xl font-semibold text-custom_orng">
                  About
                </h1>
                <p className="flex self-center w-full h-0.5 text-center bg-color1 rounded-md mb-10" />
                <div className="flex w-auto">
                  <div className="flex w-1/2 flex-col">
                    <h1 className="text-lg text-custom_orng pb-3">
                      Organization
                    </h1>
                    <h1 className="text-lg text-custom_orng pb-3">
                      Qualification
                    </h1>
                    <h1 className="text-lg text-custom_orng pb-3">Skills</h1>
                  </div>
                  <div className="flex w-1/2 flex-col">
                    <h1
                      className="text-lg font-semibold text-white pb-3"
                      id="organization"
                    >
                      {userData[0]?.graduationCollge}
                    </h1>
                    <h1
                      className="text-lg font-semibold text-white pb-3"
                      id="qualification"
                    >
                      {userData[0]?.graduationDegree}
                    </h1>
                    <h1 className="text-lg font-semibold text-white pb-3">
                      {userData[0]?.skills}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-4 items-center w-full mr-auto">
                <button className="inline-flex justify-center rounded-md border p-2 text-sm font-medium text-white hover:bg-color1 hover:text-color2">
                  Profile Download
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>User Not Found</div>
        )}
      </div>
    </>
  );
}

