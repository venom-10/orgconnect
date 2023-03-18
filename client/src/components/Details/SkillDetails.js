import React, { useState } from "react";
import { useNavigate } from "react-router";


export default function PersonalDetails() {
  const navigate = useNavigate();
  const [registerDetails, setRegisterDetails] = useState({
    skill1:"",
    skill2:"",
    skill3:"",
    skill4:"",
    w_exp:"",
    j_name:"",
    cmp_name:"",
    st_date:"",
    job_loc:"",
    curr_job:"option"
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

  const email = localStorage.getItem("email");
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");
  const phn = localStorage.getItem("phn");
  const gender = localStorage.getItem("gender");
  const city = localStorage.getItem("city");
  const state = localStorage.getItem("state");
  const address = localStorage.getItem("address");
  const dob = localStorage.getItem("dob");
  const sename = localStorage.getItem("sename");
  const seper = localStorage.getItem("seper");
  const sepy = localStorage.getItem("sepy");
  const seb = localStorage.getItem("seb");
  const hsename = localStorage.getItem("hsename");
  const hseper = localStorage.getItem("hseper");
  const hsepy = localStorage.getItem("hsepy");
  const hseb = localStorage.getItem("hseb");
  const gdeg = localStorage.getItem("gdeg");
  const gname = localStorage.getItem("gname");
  const gpy = localStorage.getItem("gpy");
  const gcgpa = localStorage.getItem("gcgpa");
  const pgdeg = localStorage.getItem("pgdeg");
  const pgname = localStorage.getItem("pgname");
  const pgpy =  localStorage.getItem("pgpy");
  const pgcgpa = localStorage.getItem("pgcgpa");
  const phdspeci = localStorage.getItem("phdspeci");
  const phdtitle = localStorage.getItem("phdtitle");
  const phdname = localStorage.getItem("phdname");
  const phddate = localStorage.getItem("phddate");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const [skill1, skill2, skill3, skill4, w_exp, j_name, cmp_name, st_date, job_loc, curr_job] 
        = [registerDetails.skill1, registerDetails.skill2, registerDetails.skill3, registerDetails.skill4,
           registerDetails.w_exp, registerDetails.j_name, registerDetails.cmp_name, registerDetails.st_date,
           registerDetails.job_loc, registerDetails.curr_job];

    const skill = (skill1 + ", " + skill2 + ", " + skill3 + ", " + skill4);

    const res = await fetch("/userDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:email,
        firstName:fname,
        lastName:lname,
        phone:phn,
        gender:gender,
        city:city,
        state:state,
        address:address,
        dob:dob,
        secondarySchool:sename,
        secondaryPercent:seper,
        secondaryPassingYear:sepy,
        secondaryBoard:seb,
        higherSchool:hsename,
        higherPercent:hseper,
        higherPassingYear:hsepy,
        higherBoard:hseb,
        graduationDegree:gdeg,
        graduationCollge:gname,
        graduationPassingYear:gpy,
        graduationCGPA:gcgpa,
        postgradDegree: pgdeg,
        postgradCollge:pgname,
        postgradPassingYear:pgpy,
        postgradCGPA:pgcgpa,
        phdSpecialization:phdspeci,
        phdTitle:phdtitle,
        phdCollege:phdname,
        phdDate:phddate,
        skills: skill,
        workMonths: w_exp,
        jobTitle:j_name,
        companyName:cmp_name,
        jobStartDate: st_date,
        location: job_loc,
        currentJob: curr_job
      }),
    });

    const data = await res.json();
    console.log(data);
    if (data.message === "Personal Details Saved Sucessfully") {
      console.log("Data Saved Sucessfully");
      navigate(`/app/home`);
    } else {
      console.log("Error in data saving");
    }
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
                    value={registerDetails.skill1}
                    onChange={handleChangeAll}
                    name="skill1"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-grey-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Skill 1"
                  />
                </div>
                <div className="percentage">
                  <input
                    type="text"
                    value={registerDetails.skill2}
                    onChange={handleChangeAll}
                    name="skill2"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Skill 2"
                  />
                </div>
                <div className="passing_year">
                  <input
                    type="text"
                    value={registerDetails.skill3}
                    onChange={handleChangeAll}
                    name="skill3"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Skill 3"
                  />
                </div>
                <div className="s_board">
                  <input
                    type="text"
                    value={registerDetails.skill4}
                    onChange={handleChangeAll}
                    name="skill4"
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
                    value={registerDetails.w_exp}
                    onChange={handleChangeAll}
                    name="w_exp"
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
                    value={registerDetails.j_name}
                    onChange={handleChangeAll}
                    name="j_name"
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
                    value={registerDetails.cmp_name}
                    onChange={handleChangeAll}
                    name="cmp_name"
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
                    value={registerDetails.st_date}
                    onChange={handleChangeAll}
                    name="st_date"
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
                    value={registerDetails.job_loc}
                    onChange={handleChangeAll}
                    name="job_loc"
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
                    name="curr_job"
                    className="bg-gray-100 border text-gray-900 text-sm font-medium rounded-md shadow-sm shadow-gray-600 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={registerDetails.curr_job}
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
                <a
                href='/app/home'
                  className="inline-flex border-custom_orng mx-8 justify-center rounded-md border py-2 px-4 text-md font-medium text-orange-300 hover:text-color1 hover:bg-custom_orng"
                >
                  Skip
                </a>
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
