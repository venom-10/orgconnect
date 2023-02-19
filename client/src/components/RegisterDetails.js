import React from "react";
import PhoneSharpIcon from "@mui/icons-material/PhoneSharp";
import PersonIcon from "@mui/icons-material/Person";
import image from '../images/img16.avif';
import bkimg from '../images/img17.avif';

export default function PersonalDetails() {
  const handleSubmit = () => {console.log("hi")};
  return (
    <>
      <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover' }} className="flex h-screen justify-center items-center bg-cyan-500">
        <div style={{ backgroundImage:`url(${bkimg})`, backgroundSize: 'cover' }} className="bg-white h-max w-6/12 flex flex-col shadow-2xl rounded-lg m-2">
          <div className="name flex justify-center my-5">
            <h1 className="text-4xl text-cyan-600 inline-block">
              Personal Details
            </h1>
          </div>
          {/* <div className="flex justify-center">
            <div className="h-1 w-3/4 bg-cyan-500 rounded-xl mb-5" />
          </div> */}
          <form onSubmit={handleSubmit}>
            <div className="details">
              <div className="name grid gap-4 mx-5 mb-6 md:grid-cols-2 px-5">
                <div className="first_name">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="first_name"
                    className="bg-white-100 border border-gray-900 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-grey-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="last_name">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="last_name"
                    className="bg-white-500 border border-gray-900 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="Phone">
                  <label
                    htmlFor="PhoneNo"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
                  >
                    Phone No.
                  </label>
                  <input
                    type="text"
                    name="Ph_no"
                    id="first_name"
                    className=" bg-white-500 border border-gray-900 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="gender">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
                  >
                    Gender
                  </label>
                  <select
                    id="countries"
                    className="bg-white-500 border border-gray-900 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {/* <option selected>Option</option> */}
                    <option defaultValue>Option</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="city w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="first_name"
                    className="bg-white-500 border border-gray-900 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="state w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="first_name"
                    className="bg-white-500 border border-gray-900 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="address">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="street_add"
                    id="first_name"
                    className="bg-white-500 border border-gray-900 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="DateOfBirth">
                  <label
                    htmlFor="DOB"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-black"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="Dob"
                    id="first_name"
                    placeholder="DD-MM-YYYY"
                    className="bg-white-500 border border-gray-900 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex w-ful mt-5 mb-3">
                  <div className="rounded-full bg-cyan-200 h-12 w-12 mt-1 flex justify-center items-center">
                    <PersonIcon fontSize="medium" />
                  </div>
                  <label
                    htmlFor="file-upload"
                    className="p-4 relative cursor-pointer rounded-md font-medium hover:text-cyan-600"
                  >
                    <span>Upload a profile</span>
                    <input
                      id="file-upload"
                      name="profile"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
                <div className="flex justify-end w-full mt-5 mb-3">
                  <div className="flex justify-centerw-6/12"></div>
                  <div className="px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className='inline-flex justify-center rounded-md border border-cyan-500 py-2 px-4 text-sm font-medium hover:bg-cyan-500 hover:text-white text-cyan-500'
                    >
                      Save and Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}