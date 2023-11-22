import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Navbar = () => {

  const navOption = (
    <>
     <li><Link to='/'>Home</Link></li>
      <li><Link to='/menu'>Our Menu</Link></li>
      <li><Link to='/order'>Order Food</Link></li>
    </>
  );

  return (
  
    <>
    
  <Helmet>
             
             <title>Bistro Resturant / menu</title>
            
           </Helmet>
   
      <div className="navbar fixed z-10 bg-opacity-50 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bisto Resturant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;