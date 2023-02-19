import React, { useState } from 'react';
import { FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
import {FaRegUserCircle} from 'react-icons/fa';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { grey } from '@mui/material/colors';
import image from '../images/img16.avif';
import bkimg from '../images/img6.avif';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import {Backdrop,CircularProgress} from "@mui/material";


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
 

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handlecPasswordChange = (event) => {
    setcPassword(event.target.value);
  }

  const handleClickShowPassword1 = () => {
    if(showPassword === true){
        setShowPassword(false);
    }else{
        setShowPassword(true);
    }
  };

  const handleClickShowPassword2 = () => {
    if(showcPassword === true){
      setShowcPassword(false);
    }else{
      setShowcPassword(true);
    }
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`Email: ${email}, Password: ${password}`);

    const res = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: username, email: email, password: password, cpassword: cpassword
        })
    });

    const data = await res.json();
    console.log(data)
    if(data.message === "Email already exists") {

        console.log("Email already exists");
        setError("Email already exists");
        setshowError(true);

    }else if(data.message === "Make sure password and current password are same"){
        console.log("Make sure password and current password are same");
        setError("Password and confirm password are different");
        setshowError(true);
    }
    else{
        const timer = setTimeout(() => {
          navigate(`/RegisterDetails`);
        }, 2000);
        Registered(true);
        setLoading(true);
        console.log("Registeration Sucessfull");
        
    }
  };

  return (
    <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover' }} className="flex min-h-screen flex-col items-center justify-center ">
      <div>
        <title>OrgConnect</title>
      </div>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div  style={{ backgroundImage:`url(${bkimg})`, backgroundSize: 'cover' }}  className='bg-white rounded-2xl shadow-2xl flex w-1/3 max-w-4xl'>
          <div className='w-3/3 p-5'>
            <div className='text-left font-bold font-10px'>
            <span className='text-cyan-500'>Org</span>Connect
            </div>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center py-10'>
               <h2 className='text-3xl font-bold text-cyan-500 mb-2 '>Register Now</h2>
               {/* <hr className="w-48 h-1  mb-2 bg-cyan-500 border-0 rounded  dark:bg-cyan-500" /> */}
               <div className='flex justify-center my-2'>
                </div>{/* social login section*/}
                  {
                    (showError === true) ? <div className='text-xs text-red-500 items-left'>{error}</div> :<div></div> 
                  }
                <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 my-1 flex flex-items-center mb-3'><FaRegUserCircle className='text-gray-500 mr-2'/>
                  <input name='username' placeholder='Username' value={username} required={true} onChange={handleUserChange} className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <div className='bg-gray-100 w-64 p-2 my-1 flex flex-items-center '>
                    <FaRegEnvelope className='text-gray-500 mr-2 '/>
                  <input type='email' name='email' placeholder='Email' value={email} required={true} onChange={handleEmailChange}  className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <div className='bg-gray-100 w-64 p-2 my-1 flex flex-items-center mb-3'><MdLockOutline className='text-gray-500 mr-2'/>
                  <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' value={password} required={true} onChange={handlePasswordChange}  className='bg-gray-100 outline-none text-sm flex-1'></input>
                  {
                        (showPassword === true)? <VisibilityIcon onClick={handleClickShowPassword1} sx={{ color: grey[500] , fontSize: 20}}/>:
                        <VisibilityOffIcon onClick={handleClickShowPassword1} sx={{ color: grey[500] , fontSize: 20}}/>
                   }
                  </div>
                  <div className='bg-gray-100 w-64 p-2 my-1 flex flex-items-center '>
                    <MdLockOutline className='text-gray-500 mr-2 '/>
                  <input type={showcPassword ? 'text' : 'password'} name='cpassword' placeholder='Confirm Password' value={cpassword} onChange={handlecPasswordChange} required={true} className='bg-gray-100 outline-none text-sm flex-1'></input>
                  {
                        (showcPassword === true)? <VisibilityIcon onClick={handleClickShowPassword2} sx={{ color: grey[500] , fontSize: 20}}/>:
                        <VisibilityOffIcon onClick={handleClickShowPassword2} sx={{ color: grey[500] , fontSize: 20}}/>
                   }
                  </div>
                  <div className='text-cyan-500 mb-2'>Already have an account? <Link href='/Login' underline='hover'>Login</Link></div>
                    <button type = "submit"  className='border-2 border-cyan-500 rounded-full my-4 px-12 py-2 inline-block font-semibold hover:bg-cyan-500 hover:text-white text-cyan-500'>Register</button>
                </form>
                  {
                    (userRegistered === true) ? <div className='text-xs text-cyan-500 items-left'>User Registered Sucessfuly</div> :<div></div> 
                  }
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
