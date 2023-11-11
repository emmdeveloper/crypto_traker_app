import { useState } from "react";
import { HiBars3CenterLeft, HiMiniXMark } from "react-icons/hi2";
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <nav id="header">
      <div className="p-3 w-full fixed  left-0 z-50 top-0 bg_header">
        <div className=" mx-auto max-w-[1200px] flex items-center justify-between">
          <h2 className="font-semibold text-[1.4rem] text-white font-[mona-sans] text_gradient">
            <a href="#home">Coindrance</a>
          </h2>

          <ul className="hidden md:flex gap-3 text-white font-[mona-sans] hover:text_gradient">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about" className="">
                About-us
              </a>
            </li>
            <li>
              <a href="#reviews" className="">
                Reviews
              </a>
            </li>
            <li>
              <a href="#getnow" className="">
                Get-Now
              </a>
            </li>
          </ul>
          {dropDown ? (
            <HiMiniXMark
              className="flex md:hidden text-[30px]"
              onClick={() => setDropDown((prev) => !prev)}
            />
          ) : (
            <HiBars3CenterLeft
              className="flex md:hidden text-[30px]"
              onClick={() => setDropDown((prev) => !prev)}
            />
          )}
          {dropDown ? (
            <ul className="flex gap-3 text-white font-[mona-sans] bg-[#33339950] h-[100rem] backdrop-blur-sm absolute right-0 top-10 text-center flex-col pt-5 text-xl w-full">
              <li>
                <a
                  href="#features"
                  onClick={() => setDropDown((prev) => !prev)}>
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className=""
                  onClick={() => setDropDown((prev) => !prev)}>
                  About-us
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className=""
                  onClick={() => setDropDown((prev) => !prev)}>
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#getnow"
                  className=""
                  onClick={() => setDropDown((prev) => !prev)}>
                  Get-Now
                </a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
