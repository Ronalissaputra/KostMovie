import React, { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const Links = [{ name: "Home", link: "/" }];
  return (
    <div className="flex fixed z-[999] justify-between lg:px-20 md:px-12 px-6 top-0 w-full h-16 bg-indigo-700 items-center">
      <div className="flex text-slate-300 items-center text-2xl">
        <BiCameraMovie />
        <span className="ml-3">KostMovie</span>
      </div>
      <ul
        className={`text-slate-300 z-[-1] fixed md:flex md:static px-14 md:px-0 text-xl w-full md:w-auto left-0 bg-indigo-700 transition-all duration-300 ease-in ${
          !burger ? "top-[-120px]" : "top-16"
        }`}
      >
        {Links.map((link) => (
          <li key={link.name} className="md:ml-10 mb-3 md:mb-auto">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setBurger(!burger)}
        className="text-4xl text-slate-300 md:hidden"
      >
        {!burger ? <RxHamburgerMenu /> : <RxCross1 />}
      </button>
    </div>
  );
};

export default Navbar;
