import { Link } from "react-router-dom";
import { useState } from "react";
import Resume from "../media/TariqRahmanResume.pdf";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="font-primary text-md font-bold pt-4">
      <button
        className={`absolute top-0 right-0 mt-2 mr-4 sm:hidden`}
        onClick={toggleMenu}
      >
        menu
      </button>
      <ul
        className={`${
          showMenu
            ? "block sm:flex" // Display as block on mobile, flex on larger screens
            : "hidden sm:flex"
        } justify-center`}
      >
        <li className="mr-3">
          <Link
            to="/"
            className="block rounded py-1 px-3 text-black hover:border-b-2 border-b-2 hover:border-slate-200 border-transparent"
          >
            home
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/aboutme"
            className="block rounded text-black py-1 px-3 hover:border-b-2 border-b-2 hover:border-slate-200 border-transparent"
          >
            about-me
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/projects"
            className="block py-1 px-3 text-black hover:border-b-2 border-b-2 hover:border-slate-200 border-transparent"
          >
            projects
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to={Resume}
            download={Resume}
            target="_blank"
            className="block flex items-center py-1 px-3 text-black hover:border-b-2 border-b-2 hover:border-slate-200 border-transparent"
          >
            <span className="mr-1">resume</span>
            {!showMenu && <ArrowDownOnSquareIcon className="h-5 w-5" />}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
