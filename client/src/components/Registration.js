import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [error, setError] = useState("");
  const [userRegistered, Registered] = useState(false);
  const [showError, setshowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState();

  const [fname, setFname] = useState(null);
  const handleChangeInput = (e) => {
    setFname(e.target.files[0].name);
    setImg(e.target.files[0]);
  };
  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlecPasswordChange = (event) => {
    setcPassword(event.target.value);
  };

  const handleClickShowPassword1 = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleClickShowPassword2 = () => {
    if (showcPassword === true) {
      setShowcPassword(false);
    } else {
      setShowcPassword(true);
    }
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("cpassword", cpassword);
    formData.append("profile", img);
    
    try {
      const res = await fetch("/register", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.error === "Please fill all the fields") {
        setError("Please fill all the fields");
        setshowError(true);
      }
      else if(data.message === 'Email or Name already exists'){
        setError("Email or Name already exists");
        setshowError(true);
      }
      else if (
        data.message === "Make sure password and current password are same"
      ) {
        setError("Password and confirm password are different");
        setshowError(true);
      } else {
        sessionStorage.setItem("email", email);
        setTimeout(() => {
          navigate(`/RegisterDetails`);
        }, 2000);
        Registered(true);
        setLoading(true);
        console.log("Registeration Sucessfull");
      }
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-color1">
      <div>
        <title>OrgConnect</title>
      </div>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="rounded-2xl shadow-2xl flex bg-color2">
          <div className="w-3/3 p-10">
            <div className="text-left font-bold text-color1">
              <span className="text-custom_orng">Org</span>Connect
            </div>
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center py-10">
              <h2 className="text-3xl font-bold text-white mb-2 ">
                <span className="text-custom_orng">Register </span>Now
              </h2>
              {/* <hr className="w-48 h-1  mb-2 bg-cyan-500 border-0 rounded  dark:bg-cyan-500" /> */}
              <div className="flex justify-center my-2"></div>
              {/* social login section*/}
              {showError === true ? (
                <div className="text-xs text-red-500 items-left">{error}</div>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="bg-gray-100 w-64 p-2 my-1 flex items-center mb-3 rounded-md">
                  <FaRegUserCircle className="text-gray-500 mr-2" />
                  <input
                    name="username"
                    placeholder="Username"
                    value={username}
                    required={true}
                    onChange={handleUserChange}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  ></input>
                </div>
                <div className="bg-gray-100 w-64 p-2 my-1 flex items-center mb-3 rounded-md">
                  <FaRegEnvelope className="text-gray-500 mr-2 " />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    required={true}
                    onChange={handleEmailChange}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  ></input>
                </div>
                <div className="bg-gray-100 w-64 p-2 my-1 flex items-center mb-3 rounded-md">
                  <MdLockOutline className="text-gray-500 mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={password}
                    required={true}
                    onChange={handlePasswordChange}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  ></input>
                  {showPassword === true ? (
                    <VisibilityIcon
                      onClick={handleClickShowPassword1}
                      sx={{ color: grey[500], fontSize: 20 }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={handleClickShowPassword1}
                      sx={{ color: grey[500], fontSize: 20 }}
                    />
                  )}
                </div>
                <div className="bg-gray-100 w-64 p-2 my-1 mb-3 flex items-center rounded-md">
                  <MdLockOutline className="text-gray-500 mr-2 " />
                  <input
                    type={showcPassword ? "text" : "password"}
                    name="cpassword"
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChange={handlecPasswordChange}
                    required={true}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  ></input>
                  {showcPassword === true ? (
                    <VisibilityIcon
                      onClick={handleClickShowPassword2}
                      sx={{ color: grey[500], fontSize: 20 }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={handleClickShowPassword2}
                      sx={{ color: grey[500], fontSize: 20 }}
                    />
                  )}
                </div>
                <div className="flex w-full mt-5 mb-3 justify-center">
                  <div className="rounded-full bg-yellow-500 h-12 w-12 mt-1 flex justify-center items-center">
                    <PersonIcon fontSize="medium" />
                  </div>
                  <label
                    htmlFor="file-upload"
                    className="p-4 text-custom_white relative cursor-pointer rounded-md font-medium hover:text-custom_orng hover:italic"
                  >
                    <span>{fname === null ? "Upload image" : fname}</span>
                    <input
                      id="file-upload"
                      name="profile"
                      onChange={handleChangeInput}
                      accept="image/png, image/gif, image/jpeg"
                      type="file"
                      className="hidden"
                    />{" "}
                  </label>
                </div>
                <div className="text-white font-semibold mb-4">
                  Already have an account?{" "}
                  <a
                    className="hover:text-custom_orng text-orange-300 hover:ilic"
                    href="/Login"
                    underline="hover"
                  >
                    Login
                  </a>
                </div>
                <button
                  type="submit"
                  className="border-2 button_hover2 border-white bg-color2 hover:bg-color1
                  text-color1 hover:text-color2 rounded-full my-4 px-12 py-2 inline-block font-semibold"
                >
                  Register
                </button>
              </form>
              {userRegistered === true ? (
                <div className="text-xs text-cyan-500 items-left">
                  User Registered Sucessfuly
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* for loading */}
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}

export default RegistrationForm;
