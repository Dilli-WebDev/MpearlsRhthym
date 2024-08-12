import { useState } from "react";
import Logo from "../assets/Mpearls_logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <header className="text-black flex justify-between bg-sky-200 items-center rounded-b-3xl h-24 p-4 text-lg">
      <a href="#">
        <img
          src={Logo}
          alt="Logo of MperalsRhythm Studio"
          className="size-1/12"
        />
      </a>
      <nav>
        <ul className="hidden md:flex">
          <li className="p-2">Home</li>
          <li className="p-2">Company</li>
          <li className="p-2">Resources</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "text-gray-900 fixed h-full left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#7c7e7e]  duration-500  ease-in-out"
              : "fixed left-[-100%] top-0  h-full ease-in-out duration-500"
          }
        >
          <a href="#">
            <img
              src={Logo}
              alt="Logo of MperalsRhythm Studio"
              className="w-11/12 p-4"
            />
          </a>
          <ul className="p-8 text-2xl">
            <li className="p-2">Home</li>
            <li className="p-2">Company</li>
            <li className="p-2">Resources</li>
            <li className="p-2">About</li>
            <li className="p-2">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
