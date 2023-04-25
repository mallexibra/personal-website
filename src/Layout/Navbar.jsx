// import Brand from "../Components/Brand";
import NavLink from "../Components/NavLink";
import { BsFillPersonFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import {
  BsLayersFill,
  BsChatSquareDotsFill,
  BsBookHalf,
  BsMoonStarsFill,
  BsBrightnessHighFill,
} from "react-icons/bs";
import Theme from "../Components/Theme";

const Navbar = ({
  home = false,
  about = false,
  portfolio = false,
  contact = false,
  blog = false,
}) => {
  return (
    <div className='w-full md:w-max md:right-3 bottom-3 flex justify-center fixed md:items-center md:h-screen'>
      <nav className='rounded-lg bg-teal-600/90 backdrop-blur-sm md:h-max mx-auto text-white drop-shadow-xl items-center p-2 flex md:flex-col'>
        <div className='flex gap-2 text-base md:flex md:flex-col'>
          <NavLink active={home} url='/'>
            <ImHome />{" "}
          </NavLink>
          <NavLink active={about} url='/about'>
            <BsFillPersonFill />{" "}
          </NavLink>
          <NavLink active={portfolio} url='/portfolio'>
            <BsLayersFill />{" "}
          </NavLink>
          <NavLink active={contact} url='/contact'>
            <BsChatSquareDotsFill />{" "}
          </NavLink>
          <NavLink active={blog} url='/blog'>
            <BsBookHalf />{" "}
          </NavLink>
          <Theme
            className='mr-2'
            light={<BsMoonStarsFill />}
            dark={<BsBrightnessHighFill />}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
