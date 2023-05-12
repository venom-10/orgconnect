import prf1 from "../../images/prf2.svg";
import { useState, useEffect } from "react";
import { Buffer } from "buffer";
import { useNavigate } from "react-router";
// import { PDFDownloadLink} from "@react-pdf/renderer";
import { Resume } from "./ResumeTemplate";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
// import { Document } from "@react-pdf/renderer";

export default function Profile() {
  const [userData, setUserData] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const navi = useNavigate();

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    const getUserData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_API}/getUser?email=${email}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      setUserData(data);
    };

    const getUserImage = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_API}/getUserImage?email=${email}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      if (data) {
        const base64String = Buffer.from(data.data).toString("base64");
        setImageSrc(`data:image/jpeg;base64,${base64String}`);
      }
    };
    getUserData();
    getUserImage();
  }, []);

  const handleProfileEdit = () => {
    navi("/EduDetails");
  };

  const generatePdfDocument = async () => {
    console.log(userData[0]);
    const blob = await pdf(
      <Resume data={userData[0]} image={imageSrc} title="My PDF" />
    ).toBlob();
    saveAs(blob, userData[0].firstName);
  };

  return (
    <>
      <div className="main_body bg-custom_bg basis-11/12 flex justify-center">
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
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              LinkedIn
            </a>
            <a
              className="text-md text-white ml-5 hover:text-custom_orng"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              GitHub
            </a>
            <a
              className="text-md text-white ml-5 hover:text-custom_orng"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Portfolio
            </a>
            <a
              className="text-md text-white ml-5 hover:text-custom_orng"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Skype
            </a>
            <h1 className="text-md text-custom_orng m-5 mt-10">
              Research Works:
            </h1>
            <a
              className="text-md text-white ml-5 hover:text-custom_orng"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Paper 1
            </a>
            <a
              className="text-md text-white ml-5 hover:text-custom_orng"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Paper 2
            </a>
            <a
              className="text-md text-white ml-5 hover:text-custom_orng"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Paper 3
            </a>
            <a
              className="text-md text-white ml-5 hover:text-custom_orng"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
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
              <h1 className="text-2xl font-semibold text-custom_orng">About</h1>
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
              <button
                onClick={handleProfileEdit}
                className="inline-flex justify-center rounded-md border p-2 text-sm font-medium text-white hover:bg-color1 hover:text-color2"
              >
                Edit Profile
              </button>
              <button
                onClick={generatePdfDocument}
                className="inline-flex justify-center rounded-md border p-2 text-sm font-medium text-white hover:bg-color1 hover:text-color2"
              >
                Profile Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
