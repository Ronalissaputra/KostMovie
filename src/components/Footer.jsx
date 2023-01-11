import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-32 bg-indigo-700 lg:px-16 pt-5 text-slate-300">
      <div className="flex justify-center">
        <span className="text-3xl flex">
          <BiCameraMovie className="mr-3" />
          KostMovie
        </span>
      </div>
      <div className="flex justify-center pt-3 ">
        <div className="mx-3">
          <a
            href="https://www.instagram.com/ronalputra_21/"
            className="flex justify-center text-xl items-center"
          >
            <BsInstagram />
            <span className="ml-2">@ronalputra_21</span>
          </a>
        </div>
        <div>
          <a href="" className="flex justify-center text-xl items-center">
            <BsFacebook />
            <span className="ml-2">Ronal Putra</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
