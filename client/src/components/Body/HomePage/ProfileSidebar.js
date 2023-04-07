import prf1 from "../../../images/prf2.svg";

export default function ProfileSidebar() {
  return (
    <div className="sidebar ml-2 flex p-4 gap-4 items-center ">
      <div className="profile h-full flex flex-col items-center rounded-lg bg-color2 shadow-lg drop-shadow-lg p-6">
        <img
          src={prf1}
          alt="profile"
          className="sidebar_profile border-custom_white mt-4 bg-white shadow-md rounded-full"
        />
        <div className="flex w-full flex-col items-center my-4 text-custom_white">
          <h1 className="text-xl font-semibold">Swetank Sinha</h1>
          <p className="mt-2 text-base ">State, India</p>
          <p className="p-2 my-7 text-center font-main">
            Intro Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            officia et quod sapiente. Tempora ducimus adipisci voluptatem!
          </p>
        </div>
      </div>
    </div>
  );
}
