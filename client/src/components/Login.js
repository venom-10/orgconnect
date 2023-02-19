import React, { useState } from 'react';
import { FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import image from '../images/img16.avif';
import bkimg from '../images/img6.avif';


 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleClickShowPassword = () => {
    if(showPassword === true){
        setShowPassword(false);
    }else{
        setShowPassword(true);
    }
  };

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`Email: ${email}, Password: ${password}`);

    const res = await fetch("/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email, password: password
        })
    });

    const data = await res.json();
    if(data.message === "Invalid Credentials") {
        console.log("Invalid Credentials");
        setError(true);
    }else{
        console.log("Login Sucessfull");
        setError(false);
        //
        navigate('/home');
    }
  }


  
  return (
    <div style={{ backgroundImage:`url(${image})`, backgroundSize: 'cover' }} className="flex min-h-screen flex-col items-center justify-center  py-2 ">
      <div>
        <title>OrgConnect</title>
      </div>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        {/* style={{ backgroundImage:`url(${bkimg})`, backgroundSize: 'cover' }} */}
        <div   className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold font-10px'>
            <span className='text-cyan-500'>Org</span>Connect
            </div>
            <div className='py-10'>
               <h2 className='text-3xl font-bold text-cyan-500 mb-2 '>Sign In</h2>
               {/* <div className='border-2 width-10  mb-2 border-cyan-500'></div> */}
               <div className='flex justify-center my-2'>
                  <a href='#' className='border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white rounded-full p-3 mx-1 text-xs'>
                     
                     Sign in with google
                  </a>
                </div>{/* social login section*/}
                <p className='text-gray-800 text-xs'>OR</p>
                {
                    (showError === true) ? <div className='text-xs text-red-500 items-left'>Invalid Credentials! Try Again</div> :<div></div> 
                } 
                <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                  <div className='bg-gray-100 w-64 p-2 my-1 flex flex-items-center mb-3'><FaRegEnvelope className='text-gray-500 mr-2'/>
                  <input type='email' name='email' placeholder='Email' value={email} onChange={handleEmailChange} required={true} className='bg-gray-100 outline-none text-sm flex-1'></input>
                  </div>
                  <div className='bg-gray-100 w-64 p-2 my-1 flex flex-items-center '>
                    <MdLockOutline className='text-gray-500 mr-2 '/>
                  <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' value={password} onChange={handlePasswordChange} required={true} className='bg-gray-100 outline-none text-sm flex-1'></input>
                   {
                        (showPassword === true)? <VisibilityIcon onClick={handleClickShowPassword} sx={{ color: grey[500] , fontSize: 20}}/>:
                        <VisibilityOffIcon onClick={handleClickShowPassword} sx={{ color: grey[500] , fontSize: 20}}/>
                   } 
                  </div>
                  <div className='flex w-64 my-5 justify-between'>
                    <label className='flex items-center text-xs'>
                      <input type='checkbox' name='remember me' className='mr-1'/>Remeber me
                    </label>
                    <a href='#' className='text-xs'>Forgot Password?</a>
                    </div>
                    <button type = "submit"  className='border-2 border-cyan-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-cyan-500 hover:text-white'>Sign in</button>
                </form>
            </div>
            </div>
            {/* style={{ backgroundImage:`url(${bkimg})`, backgroundSize: 'cover' }} */}
          <div  style={{ backgroundImage:`url(${bkimg})`, backgroundSize: 'cover' }}className='w-2/5  bg-white-400 text-cyan-500 rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2 text-black'><span className='text-cyan-500'>Org</span>Connect</h2>
            <div className='border-2 width-10 border-cyan-500 mb-2'></div>
            <p className='mb-2'>Register Now</p>
            <a href='/Register' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-cyan-500'>Register</a>
            </div>
        </div>
        {/* </div> */}

      </main>
    </div>
  )
}

export default Login