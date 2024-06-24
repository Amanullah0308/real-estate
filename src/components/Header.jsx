import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 class="font-bold text-sm sm:text-xl flex flex-wrap">
            <span class="text-slate-500">Real</span>
            <span class="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <IoSearchOutline className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li
              className="hidden sm:inline text-slate-700 hover:underline 
            hover:font-bold hover:text-white"
            >
              Home
            </li>
          </Link>
          <Link to={"/signUp"}>
            <li
              className="hidden sm:inline text-slate-700 hover:underline 
            hover:font-bold hover:text-white"
            >
              sign up
            </li>
          </Link>
          <Link to={"/signIn"}>
            <li
              className="text-slate-700 hover:underline 
            hover:font-bold hover:text-white"
            >
              sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
