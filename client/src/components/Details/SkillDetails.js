import React, { useState } from "react";
export default function PersonalDetails() {
  const [registerDetails, setRegisterDetails] = useState({
    hsc: "",
    sc: "",
    perc: "",
    pass_year: "",
    s_board: "Option",
    h_board: "Option",
    state: "",
    address: "",
    dob: "00-00-0000",
    profile: "",
  });
  const date = new Date().getFullYear();
  const cur_date = `${date}` + "-12-31";

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
      <div
        style={{ backgroundColor: "#E1F3EF", backgroundSize: "cover" }}
        className="flex justify-center items-center bg-cyan-500"
      >
        <div
          style={{ backgroundColor: "#20262E", backgroundSize: "cover" }}
          className="bg-white h-max w-8/12 flex flex-col shadow-2xl rounded-lg m-14"
        >
          <div className="m-8 mb-5 font-bold text-lg text-white ">
            <span className="text-custom_orng">Org</span>Connect
          </div>
          <div className="edu flex justify-center my-5 mt-2">
            <h1 className="text-4xl text-white inline-block font-semibold">
              <span className="text-custom_orng">Skills </span> &{" "}Experience
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="details text-white">
              <h1 className="text-3xl text-cyan-200 font-medium mx-5 mt-12 px-5">
                Skills
              </h1>
              <div className="edu grid gap-6 mx-5 mt-8 grid-cols-2 max-sm:grid-cols-1 px-5">
                <div className="sc_name text-white mb-2">
                  <input
                    type="text"
                    value={registerDetails.sc}
                    onChange={handleChangeAll}
                    name="sc"
                    id="sc_name"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-grey-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Skill 1"
                  />
                </div>
                <div className="percentage">
                  <input
                    type="text"
                    value={registerDetails.perc}
                    onChange={handleChangeAll}
                    name="perc"
                    id="percentage"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Skill 2"
                  />
                </div>
                <div className="passing_year">
                  <input
                    type="text"
                    value={registerDetails.pass_year}
                    onChange={handleChangeAll}
                    name="pass_year"
                    id="passing_year"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Skill 3"
                  />
                </div>
                <div className="s_board">
                  <input
                    type="text"
                    value={registerDetails.pass_year}
                    onChange={handleChangeAll}
                    name="pass_year"
                    id="passing_year"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Skill 4"
                  />
                </div>
              </div>
              <h1 className="text-3xl text-cyan-200 font-medium mx-5 mt-16 px-5">
                Work Experience
              </h1>
              <div className="edu grid gap-6 mx-5 mt-6 grid-cols-2 max-sm:grid-cols-1 px-5">
                <div className="hsc_name text-white">
                  <label
                    htmlFor="hsc_name"
                    className="block mb-2 text-lg font-medium"
                  >
                    What is your total work experience in months?
                  </label>
                  <input
                    type="text"
                    value={registerDetails.hsc}
                    onChange={handleChangeAll}
                    name="hsc"
                    id="hsc_name"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-grey-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="percentage">
                  <label
                    htmlFor="percentage"
                    className="block mb-2 text-lg font-medium text-white"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={registerDetails.perc}
                    onChange={handleChangeAll}
                    name="perc"
                    id="percentage"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="passing_year">
                  <label
                    htmlFor="passing_year"
                    className="block mb-2 text-lg font-medium text-white"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={registerDetails.pass_year}
                    onChange={handleChangeAll}
                    name="pass_year"
                    id="passing_year"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="h_board">
                  <label
                    htmlFor="h_board"
                    className="block mb-2 text-lg font-medium text-white"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={registerDetails.dob}
                    onChange={handleChangeAll}
                    name="dob"
                    id="first_name"
                    max={cur_date}
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="passing_year">
                  <label
                    htmlFor="passing_year"
                    className="block mb-2 text-lg font-medium text-white"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    value={registerDetails.pass_year}
                    onChange={handleChangeAll}
                    name="pass_year"
                    id="passing_year"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="s_board">
                  <label
                    htmlFor="s_board"
                    className="block mb-2 text-lg font-medium text-white"
                  >
                    Current Job?
                  </label>
                  <select
                    id="s_board"
                    name="s_board"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={registerDetails.board}
                    onChange={handleChangeAll}
                    placeholder="Select an option"
                  >
                    <option value="Options">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* <div className="edu grid gap-6 mx-5 mb-6 mt-4 grid-cols-2 max-sm:grid-cols-1 px-5"> */}
              <div className="w-full"></div>
              <div className="flex justify-end items-center w-full gap-6 mb-6 mt-16 grid-cols-2 max-sm:grid-cols-1 px-5">
                {/* <a class='text_org mr-6 text-md tracking-wider font-semibold' href='/Login' underline='hover'>Skip</a> */}
                <button
                  type="submit"
                  className="inline-flex border-custom_orng mx-8 justify-center rounded-md border py-2 px-4 text-md font-medium text-orange-300 hover:text-color1 hover:bg-custom_orng"
                >
                  Skip
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border py-2 px-4 text-md font-medium bg-color2 hover:bg-color1 hover:text-color2"
                >
                  Save and Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
