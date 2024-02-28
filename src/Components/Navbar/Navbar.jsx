/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navlinks =<>

<li><NavLink to="/categories">Categories</NavLink></li>
<li><NavLink to="/websiteBuilders">Website Builders</NavLink></li>
<li><NavLink to="/todaysDeals">Today's deals</NavLink></li>

</>

    return (
        <div className="navbar flex items-center justify-evenly p-8 h-16 w-full bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black lg:text-white w-52">
             {
                navlinks
             }
            </ul>
          </div>
<div className="relative">
  <input
    className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
    type="text"
  />


  <div className="absolute left-0 inset-y-0 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</div>



        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black lg:text-white">
            {
                navlinks
            }
          </ul>
        </div>

      </div>
    );
};

export default Navbar;