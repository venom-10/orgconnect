import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../images/Google.svg";
import '../App.css'

function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setError] = useState(false);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDetails((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const handleClickShowPassword = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Email: ${details.email}, Password: ${details.password}`);

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    });

    const data = await res.json();
    if (data.message === "Invalid Credentials") {
      console.log("Invalid Credentials");
      setError(true);
    } else {
      console.log("Login Sucessfull");
      setError(false);
      //
      navigate("/home");
    }
  };

  return (
    <div className="flex bg-color1 min-h-screen flex-col items-center justify-center py-2 ">
      <div>
        <title>OrgConnect</title>
      </div>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-custom_orng ">Org</span>Connect
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-color2 mb-2 ">Sign In</h2>

              {/* social login section*/}
              {/* <p className="text-gray-800 text-xs">OR</p> */}
              {showError === true ? (
                <div className="text-sm text-red-500 items-left">
                  Invalid Credentials! Try Again
                </div>
              ) : (
                <div></div>
              )}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="bg-gray-100 rounded-md shadow-md drop-shadow-md w-64 p-2 my-1 flex flex-items-center mb-3">
                  <FaRegEnvelope className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={details.email}
                    onChange={handleDetailsChange}
                    required={true}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  ></input>
                </div>
                <div className="bg-gray-100 rounded-md shadow-md drop-shadow-md w-64 p-2 my-1 flex flex-items-center ">
                  <MdLockOutline className="text-gray-500 mr-2 " />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={details.password}
                    onChange={handleDetailsChange}
                    required={true}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                  {showPassword === true ? (
                    <VisibilityIcon
                      onClick={handleClickShowPassword}
                      sx={{ color: grey[500], fontSize: 20 }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={handleClickShowPassword}
                      sx={{ color: grey[500], fontSize: 20 }}
                    />
                  )}
                </div>
                <div className="flex w-64 my-5 justify-between">
                  <label className="flex items-center text-xs font-medium">
                    <input
                      type="checkbox"
                      name="remember me"
                      className="mr-1"
                    />
                    Remember me
                  </label>
                  <a href="/" className="text-xs font-medium">
                    Forgot Password?
                  </a>
                </div>
                <div className="flex flex-col">
                  <button
                    type="submit"
                    className="border-2 border-color2 rounded-full px-12 py-2 my-2 inline-block font-semibold hover:bg-color2 hover:text-white"
                  >
                    Sign in
                  </button>
                  <p className="font-bold text-sm text-gray-800">OR</p>
                  <div className="flex justify-center my-2">
                    <a
                      href="/"
                      // className="border-2 border-color2 hover:bg-color2 group hover:text-white font-medium rounded-full p-3 mx-1 text-sm flex"
                      className="border-2 border-color2 rounded-full px-4 py-2 font-semibold hover:bg-color2 hover:text-white flex"
                    >
                      Continue with
                      <img
                        className="w-6 h-6 ml-3"
                        src={GoogleIcon}
                        alt="Google"
                      />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* style={{ backgroundImage:`url(${bkimg})`, backgroundSize: 'cover' }} */}
          <div className="w-2/5 bg-color2 text-cyan-500 rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2 text-white">
              <span className="text-custom_orng">Org</span>Connect
            </h2>
            <div className="border-2 width-10 border-white mb-2"></div>
            <p className="mb-2 text-color1 font-semibold">Register Now</p>
            <a
              href="/Register"
              className="border-2 mt-2 border-white text-color1 rounded-full px-12 py-2 inline-block font-semibold hover:bg-color1 hover:text-color2"
            >
              Sign Up
            </a>
          </div>
        </div>
        {/* </div> */}
      </main>
    </div>
  );
}

export default Login;
