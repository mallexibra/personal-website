import { Link } from "react-router-dom";

const NavLink = ({ url, children, active }) => {
  return (
    <Link
      className={`hover:bg-white hover:text-teal-600 font-semibold transition-all duration-150 ease-in-out px-3 py-2 rounded-md ${
        active && "bg-white text-teal-600"
      }`}
      to={url}
    >
      {children}
    </Link>
  );
};

export default NavLink;
