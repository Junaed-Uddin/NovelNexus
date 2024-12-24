import { Link, NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const routes = (
    <>
      <li>
        <NavLink className={"font-semibold mt-2 xs:py-2 text-[15px]"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-semibold mt-2 xs:py-2 text-[15px]"} to={"/my_library"}>
          My Library
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-semibold mt-2 xs:py-2 text-[15px]"} to={"/visualization"}>
          Visualization
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-semibold mt-2 xs:py-2 text-[15px]"} to={"/about"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-semibold mt-2 xs:py-2 text-[15px]"} to={"/contact"}>
          Contact
        </NavLink>
      </li>
    </>
  );

  const button = (
    <>
      <button className="btn btn-sm hover:bg-black rounded-md h-10 px-4 bg-blue-500 text-white">
        Sign Up <MdAccountCircle className="text-lg mt-0.5"></MdAccountCircle>
      </button>
    </>
  );

  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 sm:px-10 py-5">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="pr-4 lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content divide-y-2 divide-gray-300 divide-dotted space-y-2 bg-slate-100 rounded-box z-[1] mt-3 w-60 p-4 shadow"
          >
            {routes}
            <li className="flex xs:hidden">{button}</li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        >
          <span className="text-4xl">N</span>ovel
          <span className="text-4xl">N</span>exus
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal space-x-1">{routes}</ul>
      </div>
      <div className="hidden xs:flex">{button}</div>
    </div>
  );
};

export default Header;
