import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex items-center w-full justify-between text-white">
      <div className="flex justify-center items-center gap-3">
        <div className="h-10 w-10 items-center justify-center font-medium flex text-center bg-white rounded-md">
          <p className="text-[8px] text-yellow-500">Nishyan</p>
        </div>

        <div className="flex flex-col gap-0.5">
          <p className="font-medium">Nishyan</p>
          <a href="" className="underline text-xs text-gray-200 font-light">
            Visit store
          </a>
        </div>
      </div>

      <div className="text-white">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Logo;
