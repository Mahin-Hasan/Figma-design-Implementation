import { useState } from "react";
import navIcon from "../assets/logo.png";
import { IoShareSocial } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <nav className="fixed w-full top-0 z-20">
      <div className="flex items-center py-5 mt-5 justify-between px-16 relative">
        <div>
          <img className="w-[200.52px] h-[34.63px]" src={navIcon} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div className="border-2 rounded-full p-4 text-white">
            <IoShareSocial className="text-base" />
          </div>
          <div className="border-2 rounded-full p-4 text-white me-3">
            <p className="font-Messina text-xs">Download the 2024 Report</p>
          </div>
          <div
            className="text-white text-3xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      <div
        className={`${
          !toggle ? "hidden" : ""
        } justify-end py-3 me-8 px-8 bg-white absolute right-0 rounded-2xl top-7`}
      >
        <div className="flex items-center gap-3">
          <div className="border-2 rounded-full p-4 text-white bg-[#AFCD80]">
            <IoShareSocial className="text-base" />
          </div>
          <div className="border-2 rounded-full p-4 text-white me-3 bg-primaryBlue">
            <p className="font-Messina text-xs">Download the 2024 Report</p>
          </div>
          <div
            className=" text-3xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <RxCross1 />
          </div>
        </div>
        <div className="font-Messina mt-8">
          <ul className="text-lg space-y-6">
            <li>
              <a href="#">The WPPOOL Index</a>
            </li>
            <li>
              <a href="">All Companies</a>
            </li>
            <li>
              <a href="">Potential Future Listings</a>
            </li>
            <li>
              <a href="">State of USA</a>
            </li>
            <li>
              <a href="">Stories & Ideas</a>
            </li>
            <li>
              <a href="">About WPPOOL</a>
            </li>
            <li>
              <a href="">WPPOOL Portfolio Companies</a>
            </li>
          </ul>
        </div>
        <div className="font-Nantes text-primaryBlue text-[21px] my-8">
          <ul>
            <li>
              <a href="">Visit WPPOOL</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
