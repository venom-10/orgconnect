import React, { useState } from "react";
import { useNavigate } from "react-router";


export default function PersonalDetails() {

  const navigate = useNavigate();

  const [registerDetails, setRegisterDetails] = useState({
    se_name:"",
    se_per:"",
    se_py:"",
    se_b:"option",
    hse_name:"",
    hse_per:"",
    hse_py:"",
    hse_b:"option",
    g_deg:"",
    g_name:"",
    g_py:"",
    g_cgpa:"",
    pg_deg:"",
    pg_name:"",
    pg_py:"",
    pg_cgpa:"",
    phd_speci:"",
    phd_title:"",
    phd_name:"",
    phd_date:""
  });

  const date = new Date().getFullYear();
  const cur_date = `${date}-12-31`;

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
    navigate('/skills')

  };

  const storeData = () => {
    localStorage.setItem("sename", registerDetails.se_name);
    localStorage.setItem("seper", registerDetails.se_per);
    localStorage.setItem("sepy", registerDetails.se_py);
    localStorage.setItem("seb", registerDetails.se_b);
    localStorage.setItem("hsename", registerDetails.hse_name);
    localStorage.setItem("hseper", registerDetails.hse_per);
    localStorage.setItem("hsepy", registerDetails.hse_py);
    localStorage.setItem("hseb", registerDetails.hse_b);
    localStorage.setItem("gdeg", registerDetails.g_deg);
    localStorage.setItem("gname", registerDetails.g_name);
    localStorage.setItem("gpy", registerDetails.g_py);
    localStorage.setItem("gcgpa", registerDetails.g_cgpa);
    localStorage.setItem("pgdeg", registerDetails.pg_deg);
    localStorage.setItem("pgname", registerDetails.pg_name);
    localStorage.setItem("pgpy", registerDetails.pg_py);
    localStorage.setItem("pgcgpa", registerDetails.pg_cgpa);
    localStorage.setItem("phdspeci", registerDetails.phd_speci);
    localStorage.setItem("phdtitle", registerDetails.phd_title);
    localStorage.setItem("phdname", registerDetails.phd_name);
    localStorage.setItem("phddate", registerDetails.phd_date);
  }

  return (
    <>
      <div className="flex justify-center items-center bg-color1">
        <div className="bg-color2 h-max w-3/5 flex flex-col shadow-2xl rounded-lg m-14 max-md:w-11/12 max-md:mx-0 max-sm:w-screen max-sm:m-1 ">
          <div className="m-5 font-bold text-lg text-white ">
            <span className="text-custom_orng">Org</span>Connect
          </div>
          <div className="edu flex justify-center my-5 mt-2">
            <h1 className="text-4xl text-white inline-block font-semibold">
              <span className="text-custom_orng">Education</span>Details
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="details text-white">
              <h1 className="text-2xl text-cyan-200 font-medium mx-5 mt-8 px-5">
                Secondary Education
              </h1>
              <div className="grid gap-6 mx-5 mb-6 mt-4 grid-cols-2 max-sm:grid-cols-1 px-5">
                <div className="sc_name text-white">
                  <label
                    htmlFor="sc_name"
                    className="block mb-2 text-base font-medium"
                  >
                    School / University
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.se_name}
                    onChange={handleChangeAll}
                    name="se_name"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-grey-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    placeholder="School/University"
                  />
                </div>
                <div className="percentage">
                  <label
                    htmlFor="percentage"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Percentage
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.se_per}
                    onChange={handleChangeAll}
                    name="se_per"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    placeholder="Percentage"
                  />
                </div>
                <div className="passing_year">
                  <label
                    htmlFor="passing_year"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Passing Year
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.se_py}
                    onChange={handleChangeAll}
                    name="se_py"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    placeholder="Passing Year"
                  />
                </div>
                <div className="s_board">
                  <label
                    htmlFor="s_board"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Board
                  </label>
                  <select
                    name="se_b"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={registerDetails.se_b}
                    onChange={handleChangeAll}
                    placeholder="Options"
                  >
                    <option value="Options">Options</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSC">ICSC</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                </div>
              </div>
              <h1 className="text-2xl text-cyan-200 font-medium mx-5 mt-12 px-5">
                Higher Secondary Education
              </h1>
              <div className="edu grid gap-6 mx-5 mb-6 mt-4 grid-cols-2 max-sm:grid-cols-1 px-5">
                <div className="hsc_name text-white">
                  <label
                    htmlFor="hsc_name"
                    className="block mb-2 text-base font-medium"
                  >
                    Higher Secondary Education
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.hse_name}
                    onChange={handleChangeAll}
                    name="hse_name"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-grey-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    placeholder="School/University"
                  />
                </div>
                <div className="percentage">
                  <label
                    htmlFor="percentage"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Percentage
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.hse_per}
                    onChange={handleChangeAll}
                    name="hse_per"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    placeholder="Percentage"
                  />
                </div>
                <div className="passing_year">
                  <label
                    htmlFor="passing_year"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Passing Year
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.hse_py}
                    onChange={handleChangeAll}
                    name="hse_py"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    placeholder="Passing Year"
                  />
                </div>
                <div className="h_board">
                  <label
                    htmlFor="h_board"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Board
                  </label>
                  <select
                    name="hse_b"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={registerDetails.hse_b}
                    onChange={handleChangeAll}
                    placeholder="Options"
                  >
                    <option value="Options">Options</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSC">ICSC</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                </div>
              </div>
              <h1 className="text-2xl text-cyan-200 font-medium mx-5 mt-12 px-5">
                Graduation
              </h1>
              <div className="edu grid gap-6 mx-5 mb-6 mt-4 grid-cols-2 max-sm:grid-cols-1 px-5">
                <div className="graduation w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Graduation
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.g_deg}
                    onChange={handleChangeAll}
                    name="g_deg"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Degree"
                    
                  />
                </div>
                <div className="grad_univ w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-white"
                  >
                    College / University
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.g_name}
                    onChange={handleChangeAll}
                    name="g_name"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="College / University"
                    
                  />
                </div>
                <div className="g_py">
                  <label
                    htmlFor="g_py"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Passing Year
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.g_py}
                    onChange={handleChangeAll}
                    name="g_py"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Graduation Location"
                    
                  />
                </div>
                <div className="grad_gpa">
                  <label
                    htmlFor="grad_gpa"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    CGPA
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.g_cgpa}
                    onChange={handleChangeAll}
                    name="g_cgpa"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="CGPA out of 10"
                    
                  />
                </div>
              </div>
              <h1 className="text-2xl text-cyan-200 font-medium mx-5 mt-12 px-5">
                Post Graduation
              </h1>
              <div className="edu grid gap-6 mx-5 mb-6 mt-4 grid-cols-2 max-sm:grid-cols-1 px-5">
                <div className="post_graduation w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Post Graduation
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.pg_deg}
                    onChange={handleChangeAll}
                    name="pg_deg"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Degree"
                    
                  />
                </div>
                <div className="grad_univ w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-white"
                  >
                    College / University
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.pg_name}
                    onChange={handleChangeAll}
                    name="pg_name"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="College / University"
                    
                  />
                </div>
                <div className="post_grad_loc">
                  <label
                    htmlFor="post_grad_loc"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Passing Year
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.pg_py}
                    onChange={handleChangeAll}
                    name="pg_py"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Post Graduation Location"
                    
                  />
                </div>
                <div className="post_grad_gpa">
                  <label
                    htmlFor="post_grad_gpa"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    CGPA
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.pg_cgpa}
                    onChange={handleChangeAll}
                    name="pg_cgpa"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="CGPA out of 10"
                    
                  />
                </div>
              </div>
              <h1 className="text-2xl text-cyan-200 font-medium mx-5 mt-12 px-5">
                PhD
              </h1>
              <div className="edu grid gap-6 mx-5 mb-6 mt-4 grid-cols-2 max-sm:grid-cols-1 px-5">
                <div className="phd w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Specialization
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.phd_speci}
                    onChange={handleChangeAll}
                    name="phd_speci"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Specialization"
                    
                  />
                </div>
                <div className="phd_title w-full">
                  <label
                    htmlFor="phd_title"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Title of Research
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.phd_title}
                    onChange={handleChangeAll}
                    name="phd_title"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title"
                    
                  />
                </div>
                <div className="phd_univ w-full">
                  <label
                    htmlFor=""
                    className="block mb-2 text-base font-medium text-white"
                  >
                    College / University
                  </label>
                  <input
                    required
                    type="text"
                    value={registerDetails.phd_name}
                    onChange={handleChangeAll}
                    name="phd_name"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="College / University"
                    
                  />
                </div>
                <div className="phd_gpa">
                  <label
                    htmlFor="phd_gpa"
                    className="block mb-2 text-base font-medium text-white"
                  >
                    Date of Accomplishment
                  </label>
                  <input
                    required
                    type="date"
                    value={registerDetails.phd_date}
                    onChange={handleChangeAll}
                    name="phd_date"
                    id="first_name"
                    max={cur_date}
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                  />
                </div>
                <div className="w-full"></div>
                <div className="flex justify-end items-center w-full mt-5 mb-3">
                  <a
                    href="/Skills"
                    type="submit"
                    className="inline-flex border-custom_orng mx-8 justify-center rounded-md border py-2 px-4 text-md font-medium text-orange-300 hover:text-color1 hover:bg-custom_orng"
                  >
                    Skip
                  </a>
                  <button
                    onClick={storeData}
                    className="inline-flex justify-center rounded-md border py-2 px-4 text-md font-medium bg-color2 hover:bg-color1 hover:text-color2"
                  >
                    Save and Next
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
