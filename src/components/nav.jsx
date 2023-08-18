import { Link } from "react-router-dom";
import Resume from "../media/TariqRahmanResume.pdf";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <>
      <ul className="flex justify-center font-primary text-md font-bold pt-4">
        <li className="mr-3">
          <Link
            to="/"
            className="inline-block rounded py-1 px-3 text-black hover:border-b-2 border-b-2 hover:border-slate-200 border-transparent"
          >
            home
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/aboutme"
            className="inline-block rounded text-black py-1 px-3 hover:border-b-2 border-b-2 hover:border-slate-200 border-transparent"
          >
            about-me
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/projects"
            className="inline-block py-1 px-3 text-black hover:border-b-2 border-b-2 hover:border-slate-200 border-transparent"
          >
            projects
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to={Resume}
            download={Resume}
            target="_blank"
            className="flex items-center py-1 px-3 text-black hover:border-b-2 border-b-2 hover:border-slate-200 border-transparent"
          >
            <span className="mr-1">resume</span>
            <ArrowDownOnSquareIcon className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;