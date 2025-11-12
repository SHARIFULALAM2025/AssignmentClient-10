import React, {  useContext, useEffect, useState } from 'react';
import { navData } from './NavData';
import { Link, NavLink, useNavigate } from 'react-router';
import '../../App.css'
import { AuthContext } from '../Authentication/Auth/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { FaAlignJustify } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { FaRegMoon } from 'react-icons/fa'
import { MdOutlineLightMode } from 'react-icons/md'
import Component from '../Component/Component';

const Navbar = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const handelToggle = () => {
    setToggle(!toggle)

  }
  const { user, LogOut, setUser, setTheme, theme } =
    useContext(AuthContext);
console.log(user);

  const [show, setShow] = useState(false)
  const handelShow = () => {
    setShow(!show)

  }
  const LogOutUser = () => {
    LogOut().then(() => {
      toast.success("log out successfully")
      navigate('/', { state: true })
      setShow(false)
      setUser(null)



    })
      .catch(error => {
        const ErrorMessage = error.message;
        toast(ErrorMessage)
    })

  }
  //
  useEffect(() => {
    const saveTheme = localStorage.getItem('theme') || 'light'
    setTheme(saveTheme)
    document.documentElement.classList.toggle('dark', saveTheme === 'dark')
  }, [setTheme])
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme)
  }

    return (
      <div className="">
        <Component>
          {' '}
          <nav className="flex justify-between dark:bg-black  dark:text-white items-center p-1">
            <div className="">
              <Link to="/" className="flex items-center ">
                <figure>
                  <img
                    src="/download.png"
                    alt=""
                    className="md:w-12 space-x-3 md:h-12 w-10 h-10 rounded-full"
                  />
                </figure>
                <h1 className="md:text-2xl font-bold text-green-700">
                  HomeNest
                </h1>
              </Link>
            </div>
            <div className="md:flex hidden">
              <ul className="flex space-x-3">
                {navData.map((item, index) => (
                  <li key={index} className="font-semibold">
                    <NavLink to={item.path}>
                      {item.icon}
                      {item.Name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 bg-purple-400 text-gray-600 hover:text-purple-400 transition-all ease-in-out shadow-md"
              >
                {theme === 'light' ? (
                  <FaRegMoon className="w-5 h-5"></FaRegMoon>
                ) : (
                  <MdOutlineLightMode className="w-5 h-5"></MdOutlineLightMode>
                )}
              </button>
            </div>
            <div className="">
              {user ? (
                <div className="">
                  <figure onClick={handelShow} className="relative">
                    <img
                      referrerPolicy="no-referrer"
                      src={user?.photoURL}
                      alt={user?.photoURL}
                      className="mx-auto w-10 h-10 rounded-full"
                    />
                  </figure>
                </div>
              ) : (
                <div className=" md:flex hidden flex-row space-x-2">
                  {' '}
                  <Link
                    to="/Signup"
                    className=" md:px-5 md:py-2 btn  bg-green-400"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/Login"
                    className=" md:px-5 md:py-2 btn bg-blue-700"
                  >
                    Log in
                  </Link>
                </div>
              )}
            </div>

            {/*  */}
            <div className="md:hidden">
              {toggle ? (
                <button onClick={handelToggle} className="">
                  {' '}
                  <RxCross2></RxCross2>
                </button>
              ) : (
                <button onClick={handelToggle} className="">
                  <FaAlignJustify></FaAlignJustify>
                </button>
              )}
            </div>

            {show && (
              <div className="absolute z-20 bg-green-200 dark:bg-black  dark:text-white right-0 lg:mr-20 top-16 rounded-lg p-2 space-y-3">
                <h1 className="">{user?.displayName}</h1>
                <h1 className="">{user?.email}</h1>
                <button
                  onClick={LogOutUser}
                  className="px-4 py-2 text-black font-bold bg-teal-600 w-full"
                >
                  Log out
                </button>
              </div>
            )}
            {/* small device */}
            {toggle && (
              <div className="md:hidden bg-green-200 absolute border p-2 dark:bg-black  dark:text-white rounded-lg top-16 z-10 space-y-3">
                <ul className="md:flex md:space-x-3 flex flex-col space-y-4">
                  {navData.map((item, index) => (
                    <li key={index} className="font-semibold">
                      <NavLink to={item.path}>
                        {item.icon}
                        {item.Name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className=" flex  flex-col space-y-3">
                  {' '}
                  <Link
                    to="/Signup"
                    className=" md:px-5 md:py-2 btn  bg-green-400"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/Login"
                    className=" md:px-5 md:py-2 btn bg-blue-700"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            )}
          </nav>
          <ToastContainer />
        </Component>
      </div>
    )
};

export default Navbar;