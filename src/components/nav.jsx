import { Link } from "react-router-dom";
import ContactButton from "./contactButton";

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
        </ul>
    </>
  );
};

export default Nav;
