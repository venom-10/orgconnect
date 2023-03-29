import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Groups2Icon from "@mui/icons-material/Groups2";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import QuizIcon from '@mui/icons-material/Quiz';
import { Link, NavLink, Outlet } from "react-router-dom";

export default function MainHeader() {
  return (
    <>
      <div className="home">
        <div className="main_body bg-custom_white w-full h-screen flex flex-col">
          <div className="__nav basis-1/12 shrink-0 flex drop-shadow-lg bg-color2">
            <div className="sidebar">
              <h1 className="flex items-center h-full justify-center font-bold text-white text-2xl">
                <span className="text-custom_orng">Org</span>Connect
              </h1>
            </div>
            <div className="__body">
              <ul className="h-full ml-10 flex items-center gap-x-5 text-custom_white font-semibold ">
                <NavLink
                  className="border-black hover:text-custom_orng h-full flex items-center"
                  to="/app/home"
                >
                  <li>
                    <HomeRoundedIcon className="mr-1" />
                    Home
                  </li>
                </NavLink>
                <NavLink
                  className="border-black hover:text-custom_orng h-full flex items-center"
                  to="/app/group"
                >
                  <li>
                    <Groups2Icon className="mr-1" />
                    Group
                  </li>
                </NavLink>
                <NavLink
                  className="border-black hover:text-custom_orng h-full flex items-center"
                  to="/app/learn"
                >
                  <li>
                    <SchoolIcon className="mr-1" /> Learn
                  </li>
                </NavLink>
                <NavLink
                  className="border-black hover:text-custom_orng h-full flex items-center"
                  to="/app/message"
                >
                  <li>
                    <QuizIcon className="mr-1" />
                    Ask AI
                  </li>
                </NavLink>
                <NavLink
                  className="border-black hover:text-custom_orng h-full flex items-center"
                  to="/app/profile"
                >
                  <li>
                    <PersonIcon className="mr-1" />
                    Profile
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className="sidebar flex justify-around items-center text-white">
              <input
                className="rounded-2xl border-2 border-black ml-5 px-3 py-1 font-semibold text-sm"
                type="text"
                name=""
                placeholder="Search"
              />
              <Link to="home" className="hover:text-custom_orng font-semibold">
                <LogoutRoundedIcon /> logout
              </Link>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
}