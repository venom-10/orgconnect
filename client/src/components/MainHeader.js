import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Groups2Icon from "@mui/icons-material/Groups2";
import SchoolIcon from "@mui/icons-material/School";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonIcon from "@mui/icons-material/Person";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import QuizIcon from "@mui/icons-material/Quiz";
import ChatIcon from '@mui/icons-material/Chat';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MainHeader() {

  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("email")) {
      setLogin(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("email");
  };

  const handleClickSearch = (e) => {
    e.preventDefault();
    const searchName = e.target.search.value;
    navigate(`profile/${searchName}`)
  };

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
                  to="/app/chat"
                >
                  <li>
                    <ChatIcon className="mr-1" />
                    Chat
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
              <form onSubmit={handleClickSearch}>
                <input
                  className="rounded-2xl focus:outline-none border-2 border-black ml-5 px-3 py-1 font-semibold text-sm text-custom_black"
                  type="text"
                  name="search"
                  placeholder="Search"
                />
              </form>
              <Link
                to="/"
                className="hover:text-custom_orng font-semibold"
                onClick={handleLogOut}
              >
                {login ? <LogoutRoundedIcon /> : <LoginRoundedIcon />}{" "}
                {login ? "logout" : "login"}
              </Link>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
}
