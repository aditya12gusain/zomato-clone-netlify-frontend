import React, { useState } from "react";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// Components
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../Redux/Reducer/Auth/auth.action";

function MobileNav({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
  signIn,
  signUp,
}) {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <>
      <div className="flex w-full items-center justify-between lg:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3 relative">
          <button className="bg-zomato-400 text-white py-2 px-3 rounded-full ">
            Use App
          </button>
          {user?.user?.fullName ? (
            <>
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="border p-1 border-gray-300 text-zomato-400 w-14 h-14 rounded-full"
              >
                <img
                  src="https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-16 right-1 shadow-lg py-3 pl-3 pr-3 w-32 bg-white z-30 flex-col gap-2 border-2 border-gray-300 rounded">
                  <button onClick={signOutHandler}>Sign Out</button>
                </div>
              )}
            </>
          ) : (
            <>
              <span
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="border p-1 border-gray-300 text-zomato-400 rounded-full"
              >
                <FaUserAlt />
              </span>
              {isDropdownOpen && (
                <div className="absolute shadow-lg py-3  -bottom-20 -right-4 w-full bg-white flex flex-col gap-2">
                  <button onClick={signIn}>Sign In</button>
                  <button onClick={signUp}>Sign Up</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

function LargeNav({ user, isDropdownOpen, setIsDropdownOpen, signIn, signUp }) {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <>
      <div className="hidden lg:inline container px-32 mx-auto">
        <div className="hidden gap-4 w-full lg:flex items-center justify-around ">
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-300">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Delhi NCR"
                className="focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="text"
                placeholder="Search for restaurantm cusine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          {user?.user?.fullName ? (
            <div className="relative w-14">
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="border p-1 border-gray-300 text-zomato-400 w-full h-14 rounded-full"
              >
                <img
                  src="https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-20 shadow-lg py-3 pl-3 pr-3 w-32 bg-white z-30 flex-col gap-2 border-2 border-gray-300 rounded">
                  <button onClick={signOutHandler}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="ml-28 flex gap-6">
              <button
                onClick={signIn}
                className="text-gray-500 text-xl hover:text-gray-800"
              >
                Login
              </button>
              <button
                onClick={signUp}
                className="text-gray-500 text-xl hover:text-gray-800"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const reduxState = useSelector((globalStore) => globalStore.user.user);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);

  const openSignInModal = () => {
    setOpenSignin(true);
  };

  const openSignUpModal = () => {
    setOpenSignup(true);
  };

  return (
    <>
      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />

      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav
          user={reduxState}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          signIn={openSignInModal}
          signUp={openSignUpModal}
        />
        <LargeNav
          user={reduxState}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          signIn={openSignInModal}
          signUp={openSignUpModal}
        />
      </nav>
    </>
  );
}

export default Navbar;
