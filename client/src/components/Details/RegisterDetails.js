import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

export default function PersonalDetails() {
  const [registerDetails, setRegisterDetails] = useState({
    fname: "",
    lname: "",
    Ph_no: "",
    gender: "option",
    city: "",
    state: "",
    address: "",
    dob: "00-00-0000",
    profile: "",
  });
  const date = new Date().getFullYear();
  const cur_date = `${date}-12-31`;

  console.log(registerDetails);

  const handleChangeAll = (e) => {
    const { name, value } = e.target;
    setRegisterDetails((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerDetails);
  };
  return (
    <>
      <div className="flex min-h-screen bg-color1 justify-center items-center">
        <div className="bg-color2 w-3/5 flex flex-col shadow-2xl rounded-lg m-2 max-md:w-5/6 max-sm:w-screen">
          <div className="m-5 font-bold text-lg text-white">
            <span className="text-custom_orng">Org</span>Connect
          </div>
          <div className="name flex justify-center mb-8">
            <h1 className="text-4xl text-white inline-block font-semibold">
              <span className="text-custom_orng">Personal </span>Details
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="details text-white">
              <div className="name grid gap-4 mx-5 mb-6 grid-cols-2 max-md:grid-cols-1 px-5">
                <div className="first_name text-white">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-base font-medium"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    value={registerDetails.fname}
                    onChange={handleChangeAll}
                    name="fname"
                    id="first_name"
                    className="bg-gray-100 border rounded-md text-gray-900 text-sm font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-grey-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="last_name">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    value={registerDetails.lname}
                    onChange={handleChangeAll}
                    name="lname"
                    id="last_name"
                    className="bg-gray-100 border rounded-md text-gray-900 text-sm font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="Phone">
                  <label
                    htmlFor="PhoneNo"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Phone No.
                  </label>
                  <input
                    type="text"
                    value={registerDetails.Ph_no}
                    onChange={handleChangeAll}
                    name="Ph_no"
                    id="first_name"
                    className="bg-gray-100 border rounded-md text-gray-900 text-sm font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="gender">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={registerDetails.gender}
                    onChange={handleChangeAll}
                  >
                    <option value="option">Option</option>
                    <option value="female">Female </option>
                    <option value="male">Male</option>
                    <option value="prefer not to disclose">
                      Prefer not to disclose
                    </option>
                  </select>
                </div>
                <div className="city w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    value={registerDetails.city}
                    onChange={handleChangeAll}
                    name="city"
                    id="first_name"
                    className="bg-gray-100 border rounded-md text-gray-900 text-sm font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="state w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-white"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    value={registerDetails.state}
                    onChange={handleChangeAll}
                    name="state"
                    id="first_name"
                    className="bg-gray-100 border rounded-md text-gray-900 text-sm font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="address">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    value={registerDetails.address}
                    onChange={handleChangeAll}
                    name="address"
                    id="first_name"
                    className="bg-gray-100 border rounded-md text-gray-900 text-sm font-medium  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="DateOfBirth">
                  <label
                    htmlFor="DOB"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={registerDetails.dob}
                    onChange={handleChangeAll}
                    name="dob"
                    id="first_name"
                    max={cur_date}
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex w-ful mt-5 mb-3">
                  <div className="rounded-full bg-yellow-500 h-12 w-12 mt-1 flex justify-center items-center">
                    <PersonIcon fontSize="medium" />
                  </div>
                  <label
                    htmlFor="file-upload"
                    className="p-4 text_org relative cursor-pointer rounded-md font-medium hover:text-custom_orng hover:italic"
                  >
                    <span>Upload Profile</span>
                    <input
                      id="file-upload"
                      name="profile"
                      value={registerDetails.profile}
                      onChange={handleChangeAll}
                      type="file"
                      className="sr-only"
                    />{" "}
                  </label>
                </div>
                <div className="flex justify-end items-center w-full mt-5 mb-3">
                  <a
                    href="/EduDetails"
                    className="inline-flex justify-center rounded-md border py-2 px-4 text-md font-medium bg-color2 hover:bg-color1 hover:text-color2"
                  >
                    Save and Next
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}