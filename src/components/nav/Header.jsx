import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { GrAnnounce } from "react-icons/gr";

const Header = ({ title = "" }) => {
  return (
    <div className="h-14 bg-white flex justify-center items-center border-gray-300 border-b pl-6 pr-5">
      {/* Left section start */}
      <div className="flex items-center gap-4 w-1/3">
        <p className="text-lg font-semibold">{title}</p>

        <div className="flex gap-1 items-center font-medium text-xs text-gray-700">
          <QuestionMarkCircleIcon className="w-4 h-4" />
          <p>How it works</p>
        </div>
      </div>
      {/* Left section end */}

      {/* Middle search section start */}
      <div className="flex items-center w-1/3">
        <div className="bg-gray-200 rounded-lg py-1 gap-2 pl-4 max-w-sm w-full flex items-center">
          <CiSearch />

          <input
            type="text"
            className="outline-none flex-1 bg-transparent"
            placeholder="Search features, tutorials, etc."
          />
        </div>
      </div>
      {/* Middle search section end */}

      {/* Right section start */}
      <div className="flex justify-end items-center gap-2 w-1/3">
        <RightButton Icon={GrAnnounce} aria-label="Announcement" />
        <RightButton Icon={IoMdArrowDropdownCircle} aria-label="Dropdown" />
      </div>
      {/* Right section end */}
    </div>
  );
};

const RightButton = ({ Icon, onClick = () => {}, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-2 bg-gray-200  justify-center items-center flex"
      {...props}
    >
      <Icon className="w-5 h-5 text-gray-600" />
    </button>
  );
};

export default Header;
