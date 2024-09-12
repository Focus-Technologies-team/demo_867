import { useState } from "react";
import { BUSINESS_LOGO } from "../constants";

export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <nav className="bg-white w-full h-[100px] border">
      <div className="w-full h-full sm:justify-around justify-between px-2 flex items-center">
        <img src={BUSINESS_LOGO} width={126} height={25} alt="logo" />
        <div className="hidden md:block">
          <ul className="flex w-[411px] justify-between">
            <li>
              <a href="" className="font-normal text-[20px]">
                Home
              </a>
            </li>
            <li>
              <a href="" className="font-normal text-[20px]">
                About
              </a>
            </li>
            <li>
              <a href="" className="font-normal text-[20px]">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="font-normal text-[20px]">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="space-x-[10px]">
            <button className="bg-white font-normal text-black text-[20px] w-[116px] h-[40px]">
              Login
            </button>
            <button className="bg-jadaad-blue font-normal text-white text-[16px] w-[116px] h-[40px] rounded-md">
              Sign Up
            </button>
          </div>
        </div>
        <div className="md:hidden block relative">
          <button
            onClick={() => setIsBurgerOpen((prev) => !prev)}
            className="flex flex-col gap-1"
          >
            <div className="w-8 rounded-md h-1 bg-jadaad-blue"></div>
            <div className="w-8 rounded-md h-1 bg-jadaad-blue"></div>
            <div className="w-8 rounded-md h-1 bg-jadaad-blue"></div>
          </button>

          {isBurgerOpen && (
            <ul className="absolute transition ease-out duration-100 right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none">
              <li>
                <a href="" className="font-normal text-[20px]">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="font-normal text-[20px]">
                  About
                </a>
              </li>
              <li>
                <a href="" className="font-normal text-[20px]">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="font-normal text-[20px]">
                  FAQs
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
