import { NavLink } from "react-router-dom";
import NavRoutes from "./NavRoutes";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import { useCart } from "../../Context/CartProvider";
import { CgAdidas } from "react-icons/cg";
import { useAuth } from "../../Context/AuthProvider";
import { useTheme, useThemeActions } from "../../Context/ThemeProvider";
import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsFillDisplayFill,
} from "react-icons/bs";

const Navigation = () => {
  const [navStatus, setNavStatus] = useState(false);

  const [themeBar, setThemeBar] = useState(false);

  const userData = useAuth();
  const { cart } = useCart();

  let setTheme = useThemeActions();
  let Theme = useTheme();

  const setThemeHandler = (e) => {
    setTheme({ selected: e.target.value });
  };

  return (
    <>
      <nav className="backdrop-blur-sm hidden sm:flex flex-row sm:justify-between dark:bg-slate-900/90 text-slate-900 bg-white/90 dark:text-slate-50 sm:px-8 h-14 items-center w-full">
        <ul className="flex items-center sm:w-[35%] md:w-[45%]">
          <li className="uppercase sm:text-5xl">
            <NavLink to="/">
              <CgAdidas />
            </NavLink>
          </li>
        </ul>
        <ul className="flex-row items-center sm:w-[65%] md:w-[55%] justify-between sm:flex">
          {NavRoutes.map((item) => {
            return (
              <li
                className="capitalize text-[10px] sm:text-lg hover:rounded-lg  dark:hover:bg-slate-50 dark:hover:text-slate-900 mx-2"
                key={item.to}
              >
                <NavLink
                  to={item.to}
                  className={(navData) =>
                    navData.isActive
                      ? "dark:text-slate-500 text-sky-600 px-3 py-6"
                      : "px-3 py-6"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          <li className="capitalize text-[10px] sm:text-lg hover:rounded-lg dark:hover:bg-slate-50 dark:hover:text-slate-900 mx-2">
            <NavLink
              to="/cart"
              className={(navData) =>
                navData.isActive
                  ? "dark:text-slate-500 text-sky-600 flex"
                  : "flex"
              }
            >
              cart&nbsp;
              <sup>
                <p className=" bg-sky-600 text-white animate-pulse  rounded-full w-5 h-5 text-center text-sm px-1">
                  {cart.length}
                </p>
              </sup>
            </NavLink>
          </li>
          <li className="capitalize text-[10px] sm:text-lg hover:rounded-lg dark:hover:bg-slate-50 dark:hover:text-slate-900 mx-2">
            <NavLink
              to={userData ? "/profile" : "/login"}
              className={(navData) =>
                navData.isActive
                  ? "dark:text-slate-500 text-sky-600 px-3 py-6"
                  : "px-3 py-6"
              }
            >
              {userData ? "profile" : "login"}
            </NavLink>
          </li>
          <li className="capitalize text-[10px] sm:text-lg hover:rounded-lg dark:hover:bg-slate-50 dark:hover:text-slate-900 mx-2 flex items-baseline">
            <button
              className=" px-3 py-2"
              onClick={() => {
                setThemeBar(!themeBar);
              }}
            >
              {Theme.used === "light" && <BsFillSunFill />}
              {Theme.used === "system" && <BsFillDisplayFill />}
              {Theme.used === "dark" && <BsFillMoonStarsFill />}
            </button>
          </li>
        </ul>
      </nav>
      <nav className="backdrop-blur-sm items-center flex flex-row dark:bg-slate-900/95 dark:text-slate-50 text-slate-900 bg-white/90 px-6 h-16 py-2 sm:hidden justify-between">
        <ul className="text-xl flex items-center w-1/3 justify-start">
          <li>
            {navStatus ? (
              <AiOutlineClose onClick={() => setNavStatus(!navStatus)} />
            ) : (
              <AiOutlineMenu onClick={() => setNavStatus(!navStatus)} />
            )}
          </li>
        </ul>
        <ul className="flex items-center  w-1/3 justify-center">
          <li className="text-5xl uppercase">
            <NavLink to="/">
              <CgAdidas />
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center text-xl w-1/3 justify-end">
          <li className="mr-[10%]">
            <NavLink className="flex items-center flex-row" to="/cart">
              <AiOutlineShopping />
              <sup>
                <p className="bg-sky-600 animate-bounce text-white rounded-full w-5 h-5 text-center text-sm px-1">
                  {cart.length}
                </p>
              </sup>
            </NavLink>
          </li>
          <li>
            <NavLink to={userData ? "/profile" : "/login"}>
              <AiOutlineUser />
            </NavLink>
          </li>
        </ul>
      </nav>
      {themeBar && (
        <div
          onBlur={() => setThemeBar(!themeBar)}
          className="fixed top-16 z-50 bg-white rounded flex-col right-4 hidden sm:flex"
        >
          <button
            className="pl-6 pr-10 rounded hover:bg-slate-100 py-2 flex items-center"
            onClick={() => {
              setTheme({ selected: "system" });
              setThemeBar(!themeBar);
            }}
          >
            <BsFillDisplayFill />
            &nbsp; System
          </button>
          <button
            className="pl-6 pr-10 rounded hover:bg-slate-100 py-2 flex items-center"
            onClick={() => {
              setTheme({ selected: "light" });
              setThemeBar(!themeBar);
            }}
          >
            <BsFillSunFill />
            &nbsp; Light
          </button>
          <button
            className="pl-6 pr-10 rounded hover:bg-slate-100 py-2 flex items-center"
            onClick={() => {
              setTheme({ selected: "dark" });
              setThemeBar(!themeBar);
            }}
          >
            <BsFillMoonStarsFill />
            &nbsp; Dark
          </button>
        </div>
      )}
      {navStatus && (
        <div className="fixed top-16 z-50 dark:bg-slate-800 bg-slate-50 flex sm:hidden flex-col w-full h-screen animate-slide-down">
          {NavRoutes.map((item) => {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={(navData) =>
                  navData.isActive
                    ? "dark:text-slate-500 text-sky-600 animate-nav-link-slide py-4 px-8 capitalize text-xl mb-3 hover:rounded dark:hover:bg-slate-50 hover:bg-slate-900 dark:hover:text-slate-900 hover:text-slate-50"
                    : `w-full animate-nav-link-slide py-4 px-8 dark:text-slate-50 capitalize text-xl mb-3 hover:rounded dark:hover:bg-slate-50 hover:bg-slate-900 dark:hover:text-slate-900 hover:text-slate-50`
                }
                onClick={() => setNavStatus(!navStatus)}
              >
                {item.name}
              </NavLink>
            );
          })}
          <li className="flex flex-row justify-between w-full animate-nav-link-slide py-4 px-8 dark:text-slate-50 capitalize text-xl mb-3 hover:rounded">
            <label htmlFor="theme">Theme:</label>
            <select
              className="bg-transparent outline-none capitalize"
              id="theme"
              onChange={setThemeHandler}
              defaultValue={Theme.used}
            >
              <option value="system">system</option>
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
          </li>
        </div>
      )}
    </>
  );
};

export default Navigation;
