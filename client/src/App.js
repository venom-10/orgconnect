import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import PersonalDetails from "./components/Details/RegisterDetails";
import PersonalDetails2 from './components/Details/EduDetails';
import Skills from "./components/Details/SkillDetails";
import HomePage from './components/Home';

function App() {
  // const[isLogin, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}> */}
        <Route index element={<Login />} />
        <Route path="Home" element={<HomePage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Registration />} />
        <Route path="RegisterDetails" element={<PersonalDetails />} />
        <Route path="EduDetails" element={<PersonalDetails2 />} />
        <Route path="Skills" element={<Skills />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
