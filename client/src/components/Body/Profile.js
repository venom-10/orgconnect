import { useState, useEffect } from "react";

export default function Profile() {

  return (
    <>
      <div className="main_body bg-custom_bg basis-11/12 flex justify-center">
        <div className="__body p-4 flex bg-color2 m-4 rounded-lg shadow-lg drop-shadow-lg">
          <div className=" flex w-2/5 flex-col p-5">
            <img
              src=""
              alt="profile"
              className="w-4/6 border-custom_white bg-white shadow-md  m-4"
            />
            <h1 className="text-md text-custom_orng m-5 mt-10">Work Links:</h1>
            <a
              className="text-md text-white ml-5"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Youtube
            </a>
            <a
              className="text-md text-white ml-5"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              LinkedIn
            </a>
            <a
              className="text-md text-white ml-5"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Portfolio
            </a>
            <a
              className="text-md text-white ml-5"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Twitter
            </a>
            <a
              className="text-md text-white ml-5"
              href="https://www.youtube.com/watch?v=kHEhhV3EyPU&t=1s"
              target="_thapa"
            >
              Facebook
            </a>
          </div>
          <div className="flex w-4/5 flex-col pt-14">
            <h1 className="text-3xl font-semibold text-custom_orng">
              Swetank Sinha
            </h1>
            <h1 className="text-xl font-semibold text-white pb-6">Developer</h1>
            <h1 className="text-md text-white">Ranking: 1/10</h1>
            <div className="flex w-full h-full flex-col mt-12 pt-5">
              <h1 className="text-2xl font-semibold text-custom_orng">About</h1>
              <p className="flex self-center w-full h-0.5 text-center bg-color1 rounded-md mb-10" />
              <div className="flex w-auto">
                <div className="flex w-1/2 flex-col">
                  <h1 className="text-lg text-custom_orng pb-3">Experience</h1>
                  <h1 className="text-lg text-custom_orng pb-3">Hourly Rate</h1>
                  <h1 className="text-lg text-custom_orng pb-3">
                    Total Projects
                  </h1>
                  <h1 className="text-lg text-custom_orng pb-3">
                    English Level
                  </h1>
                  <h1 className="text-lg text-custom_orng pb-3">
                    Availability
                  </h1>
                </div>
                <div className="flex w-1/2 flex-col">
                  <h1 className="text-lg font-semibold text-white pb-3">
                    Expert
                  </h1>
                  <h1 className="text-lg font-semibold text-white pb-3">
                    $10000000/hr
                  </h1>
                  <h1 className="text-lg font-semibold text-white pb-3">999</h1>
                  <h1 className="text-lg font-semibold text-white pb-3">
                    Expert
                  </h1>
                  <h1 className="text-lg font-semibold text-white pb-3">
                    3 months
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 items-center w-full mr-auto">
              <button className="inline-flex justify-center rounded-md border p-2 text-sm font-medium text-white hover:bg-color1 hover:text-color2">
                Edit Profile
              </button>
              <button className="inline-flex justify-center rounded-md border p-2 text-sm font-medium text-white hover:bg-color1 hover:text-color2">
                Profile Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
