import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import PersonalDetails from "./components/Details/RegisterDetails";
import PersonalDetails2 from "./components/Details/EduDetails";
import Skills from "./components/Details/SkillDetails";
import HomePage from "./components/Home";
import Group from "./components/Group";
import Learn from "./components/Learn";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Error from "./components/Error";

function App() {
  // const[isLogin, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Registration />} />
        <Route path="RegisterDetails" element={<PersonalDetails />} />
        <Route path="EduDetails" element={<PersonalDetails2 />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="app">
          <Route path="Home" element={<HomePage />} />
          <Route path="Group" element={<Group />} />
          <Route path="Learn" element={<Learn />} />
          <Route path="Message" element={<Message />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
